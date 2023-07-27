import { getOwner } from '@ember/owner';
import { scheduleOnce } from '@ember/runloop';
import Service, { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import { assert } from '@ember/debug';
import RouterService from '@ember/routing/router-service';
import SimpleDomDocument from '@simple-dom/document';
import type Owner from '@ember/owner';

const isFastBoot = typeof FastBoot !== 'undefined';

const RouterEvent = {
  ROUTE_DID_CHANGE: 'routeDidChange',
} as const;
const configKeys: (keyof PageTitleConfig)[] = [
  'separator',
  'prepend',
  'replace',
];

export interface PageTitleToken extends PageTitleConfig {
  id: string;
  title?: string;
  separator?: string;
  prepend?: boolean;
  replace?: boolean;
  front?: unknown;
  previous?: PageTitleToken | null;
  next?: PageTitleToken | null;
}

interface PageTitleConfig {
  /** The default separator to use between tokens. */
  separator?: string;

  /** The default prepend value to use. */
  prepend?: boolean;

  /** The default replace value to use. */
  replace?: boolean | null;
}

type FastBootDocument = ReturnType<typeof SimpleDomDocument>;

/**
  @class page-title
  @extends Ember.Service
 */
export default class PageTitleService extends Service {
  @service('router')
  declare router: RouterService;

  // in fastboot context "document" is instance of
  // ember-fastboot/simple-dom document
  @service('-document')
  declare document: FastBootDocument & { title?: string };

  tokens: PageTitleToken[] = [];

  _defaultConfig: PageTitleConfig = {
    // The default separator to use between tokens.
    separator: ' | ',

    // The default prepend value to use.
    prepend: true,

    // The default replace value to use.
    replace: null,
  };

  constructor(...attributes: Array<Owner | undefined>) {
    super(...attributes);
    this._validateExistingTitleElement();

    // SAFETY: This is only valid because we cast it to a type which is optional
    // *and* whose key is optional. It may be *wrong*, but it is at least sound.
    const config = getOwner(this)?.factoryFor('config:environment')?.class as
      | {
          pageTitle?: PageTitleConfig;
        }
      | undefined;

    if (config?.pageTitle) {
      configKeys.forEach((key) => {
        if (!isEmpty(config.pageTitle?.[key])) {
          (this._defaultConfig[key] as PageTitleConfig[typeof key]) =
            config.pageTitle?.[key];
        }
      });
    }

    this.router.on(RouterEvent.ROUTE_DID_CHANGE, this.scheduleTitleUpdate);
  }

  applyTokenDefaults(token: PageTitleToken) {
    const defaultSeparator = this._defaultConfig.separator;
    const defaultPrepend = this._defaultConfig.prepend;
    const defaultReplace = this._defaultConfig.replace;

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
      token.previous = previous;
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

  get visibleTokens() {
    const tokens = this.tokens;
    let i = tokens ? tokens.length : 0;
    const visible = [];

    while (i--) {
      const token = tokens[i];
      if (!token) return;

      if (token.replace) {
        visible.unshift(token);
        break;
      } else {
        visible.unshift(token);
      }
    }

    return visible;
  }

  get sortedTokens() {
    const visible = this.visibleTokens;
    if (!visible) return;

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
    scheduleOnce('afterRender', this, this._updateTitle);
  };

  toString() {
    const tokens = this.sortedTokens;
    if (!tokens) return '';

    const title = [];

    for (let i = 0, len = tokens.length; i < len; i++) {
      const token = tokens[i];
      if (!token) break;

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
      document.head.querySelectorAll('title').length <= 1
    );
  }

  /**
   * Find token by id
   *
   * IE11 compatible approach due to lack of Array.find support
   * TODO: Remove when we drop support for Ember 3.28
   *
   * @param {String} id
   * @private
   */
  private _findTokenById(id: PageTitleToken['id']) {
    return this.tokens.filter((token) => {
      return token.id === id;
    })[0];
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
      if (!node) break;

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
    // default is empty, meant to be overridden by user if desired
  }
}

declare module '@ember/service' {
  interface Registry {
    'page-title': PageTitleService;
    '-document': FastBootDocument & { title?: string };
  }
}
