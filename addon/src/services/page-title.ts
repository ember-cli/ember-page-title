import { scheduleOnce } from '@ember/runloop';
import Service, { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import { assert } from '@ember/debug';
import type ApplicationInstance from '@ember/application/instance';
import type RouterService from '@ember/routing/router-service';
import type Owner from '@ember/owner';

import type {
  FastBootDocument,
  PageTitleToken,
  PageTitleConfig,
} from '../private-types.ts';

const isFastBoot = typeof FastBoot !== 'undefined';

const RouterEvent = {
  ROUTE_DID_CHANGE: 'routeDidChange',
} as const;

function hasResolveRegistration(owner: Owner): owner is ApplicationInstance {
  return `resolveRegistration` in owner;
}

function hasPageTitleConfig(
  fromEnv: unknown,
): fromEnv is { pageTitle: PageTitleConfig } {
  if (typeof fromEnv !== 'object') return false;
  if (fromEnv === null) return false;

  // all properties on the pageTitle config are optional,
  // so we can't check for more
  return 'pageTitle' in fromEnv;
}

const configKeys = ['separator', 'prepend', 'replace'] as const;

/**
  @class page-title
  @extends Ember.Service
 */
export default class PageTitleService extends Service {
  @service('router') declare router: RouterService;

  // in fastboot context "document" is instance of
  // ember-fastboot/simple-dom document
  @service('-document') private declare document: FastBootDocument;

  tokens: PageTitleToken[] = [];

  _defaultConfig: PageTitleConfig = {
    // The default separator to use between tokens.
    separator: ' | ',

    // The default prepend value to use.
    prepend: true,

    // The default replace value to use.
    replace: null,
  };

  constructor(owner: Owner) {
    super(owner);
    this._validateExistingTitleElement();

    if (hasResolveRegistration(owner)) {
      const config = owner.resolveRegistration('config:environment');

      if (hasPageTitleConfig(config)) {
        configKeys.forEach((key) => {
          if (!isEmpty(config.pageTitle[key])) {
            const configValue = config.pageTitle[key];

            // SAFETY: how is one supposed to iterate over keys for an object and have it
            //         known to the compiler that both objects, having the same shape,
            //         will have the same type per-value?
            //         as-is, the `configValue` is a union of all value-types from the object.
            (this._defaultConfig[key] as PageTitleConfig[typeof key]) =
              configValue;
          }
        });
      }
    }
    this.router.on(RouterEvent.ROUTE_DID_CHANGE, this.scheduleTitleUpdate);
  }

  applyTokenDefaults(token: PageTitleToken) {
    const defaultSeparator = this._defaultConfig.separator;
    const defaultPrepend = this._defaultConfig.prepend;
    const defaultReplace = this._defaultConfig.replace;

    token.previous ??= null;
    token.next ??= null;

    if (token.separator == null) {
      token.separator = defaultSeparator;
    }

    if (token.prepend == null && defaultPrepend != null) {
      token.prepend = defaultPrepend;
    }

    if (token.replace == null && defaultReplace != null) {
      token.replace = defaultReplace;
    }
  }

  inheritFromPrevious(token: PageTitleToken) {
    const previous = token.previous;
    if (previous) {
      if (token.separator == null) {
        token.separator = previous.separator;
      }

      if (token.prepend == null) {
        token.prepend = previous.prepend;
      }
    }
  }

  push(token: PageTitleToken) {
    const tokenForId = this._findTokenById(token.id);
    if (tokenForId) {
      const index = this.tokens.indexOf(tokenForId);
      const tokens = [...this.tokens];
      const previous = tokenForId.previous;
      token.previous = previous;
      token.next = tokenForId.next;
      this.inheritFromPrevious(token);
      this.applyTokenDefaults(token);

      tokens.splice(index, 1, token);
      this.tokens = tokens;
      return;
    }

    const previous = this.tokens.slice(-1)[0];
    if (previous) {
      token.previous = previous ?? null;
      previous.next = token;
      this.inheritFromPrevious(token);
    }

    this.applyTokenDefaults(token);
    this.tokens = [...this.tokens, token];
  }

  remove(id: PageTitleToken['id']) {
    const token = this._findTokenById(id);

    if (!token) return;

    const { next, previous } = token;
    if (next) {
      next.previous = previous;
    }

    if (previous) {
      previous.next = next;
    }

    token.previous = token.next = null;

    const tokens = [...this.tokens];
    tokens.splice(tokens.indexOf(token), 1);
    this.tokens = tokens;
  }

  get visibleTokens(): PageTitleToken[] {
    const tokens = this.tokens;
    let i = tokens ? tokens.length : 0;
    const visible = [];
    while (i--) {
      const token = tokens[i];

      if (!token) continue;

      if (token.replace) {
        visible.unshift(token);
        break;
      } else {
        visible.unshift(token);
      }
    }
    return visible;
  }

  get sortedTokens(): PageTitleToken[] {
    const visible = this.visibleTokens;
    if (!visible) return [];

    let appending = true;
    let group: PageTitleToken[] = [];
    const groups = [group];
    const frontGroups: PageTitleToken[] = [];

    visible.forEach((token) => {
      if (token.front) {
        frontGroups.unshift(token);
      } else if (token.prepend) {
        if (appending) {
          appending = false;
          group = [];
          groups.push(group);
        }
        const lastToken = group[0];
        if (lastToken) {
          token = { ...token };
          token.separator = lastToken.separator;
        }
        group.unshift(token);
      } else {
        if (!appending) {
          appending = true;
          group = [];
          groups.push(group);
        }
        group.push(token);
      }
    });

    return frontGroups.concat(groups.reduce((E, group) => E.concat(group), []));
  }

  scheduleTitleUpdate = () => {
    // eslint-disable-next-line ember/no-runloop
    scheduleOnce('afterRender', this, this._updateTitle);
  };

  toString(): string {
    const tokens = this.sortedTokens;
    const title = [];

    for (let i = 0, len = tokens.length; i < len; i++) {
      const token = tokens[i];
      if (!token) continue;

      if (token.title) {
        title.push(token.title);
        if (i + 1 < len) {
          title.push(token.separator);
        }
      }
    }

    return title.join('');
  }

  willDestroy() {
    super.willDestroy();
    this.router.off(RouterEvent.ROUTE_DID_CHANGE, this.scheduleTitleUpdate);
  }

  private _updateTitle() {
    const toBeTitle = this.toString();

    if (isFastBoot) {
      this.updateFastbootTitle(toBeTitle);
    } else {
      /**
       * When rendering app with "?fastboot=false" (http://ember-fastboot.com/docs/user-guide#disabling-fastboot)
       * We will not have <title> element present in DOM.
       *
       * But this is fine as by HTML spec,
       * one is created upon assigning "document.title" value;
       *
       * https://html.spec.whatwg.org/multipage/dom.html#dom-tree-accessors
       */
      this.document.title = toBeTitle;
    }

    this.titleDidUpdate(toBeTitle);
  }

  /**
   * Validate if there's more than one title element present.
   *
   * Example: ember-cli-head can cause conflicting updates.
   * @private
   */
  private _validateExistingTitleElement() {
    if (isFastBoot) {
      return;
    }
    assert(
      '[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.',
      document.head.querySelectorAll('title').length <= 1,
    );
  }

  /**
   * Find token by id
   *
   * @param {String} id
   * @private
   */
  private _findTokenById(id: PageTitleToken['id']) {
    return this.tokens.find((token) => token.id === id);
  }

  updateFastbootTitle(toBeTitle: string) {
    if (!isFastBoot) {
      return;
    }
    const headElement = this.document.head;
    const headChildNodes = headElement.childNodes;

    // Remove existing title elements from previous render cycle
    for (let i = 0; i < headChildNodes.length; i++) {
      const node = headChildNodes[i];
      if (!node) continue;

      if (node.nodeName.toLowerCase() === 'title') {
        headElement.removeChild(node);
      }
    }

    // Add title element with latest value
    const titleEl = this.document.createElement('title');
    const titleContents = this.document.createTextNode(toBeTitle);
    titleEl.appendChild(titleContents);
    headElement.appendChild(titleEl);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  titleDidUpdate(_title: string) {
    // default is empty, meant to be overriden by user if desired
  }
}
