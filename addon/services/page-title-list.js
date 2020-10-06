import { A } from '@ember/array';
import { getOwner } from '@ember/application';
import { scheduleOnce } from '@ember/runloop';
import Service, { inject as service } from '@ember/service';
import { set, computed } from '@ember/object';
import { capitalize } from '@ember/string';
import { isPresent } from '@ember/utils';
import { assert } from '@ember/debug';

let isFastBoot = typeof FastBoot !== 'undefined';

const RouterEvent = {
  ROUTE_DID_CHANGE: "routeDidChange"
};

/**
  @class page-title-list
  @extends Ember.Service
 */
export default class PageTitleListService extends Service {
  @service
  router;

  @service('-document')
  document;

  init() {
    super.init();
    set(this, 'tokens', A());
    this._validateExistingTitleElement();

    let config = getOwner(this).resolveRegistration('config:environment');
    if (config.pageTitle) {
      ['separator', 'prepend', 'replace'].forEach((key) => {
        if (isPresent(config.pageTitle[key])) {
          set(this, `default${capitalize(key)}`, config.pageTitle[key]);
        }
      });
    }
    this.router.on(RouterEvent.ROUTE_DID_CHANGE, this.scheduleTitleUpdate);
  }

  /**
    The default separator to use between tokens.

    @property defaultSeparator
    @default ' | '
   */
  defaultSeparator = ' | ';

  /**
    The default prepend value to use.

    @property defaultPrepend
    @default true
   */
  defaultPrepend = true;

  /**
    The default replace value to use.

    @property defaultReplace
    @default null
   */
  defaultReplace = null;

  tokens = null;

  applyTokenDefaults(token) {
    let defaultSeparator = this.defaultSeparator;
    let defaultPrepend = this.defaultPrepend;
    let defaultReplace = this.defaultReplace;

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

  inheritFromPrevious(token) {
    let previous = token.previous;
    if (previous) {
      if (token.separator == null) {
        token.separator = previous.separator;
      }

      if (token.prepend == null) {
        token.prepend = previous.prepend;
      }
    }
  }

  push(token) {
    let tokenForId = this.tokens.findBy('id', token.id);
    if (tokenForId) {
      let index = this.tokens.indexOf(tokenForId);
      let tokens = [...this.tokens];
      let previous = tokenForId.previous;
      token.previous = previous;
      token.next = tokenForId.next;
      this.inheritFromPrevious(token);
      this.applyTokenDefaults(token);

      tokens.splice(index, 1, token);
      set(this, 'tokens', A(tokens));
      return;
    }

    let previous = this.tokens.slice(-1)[0];
    if (previous) {
      token.previous = previous;
      previous.next = token;
      this.inheritFromPrevious(token);
    }

    this.applyTokenDefaults(token);

    let tokens = [...this.tokens];
    tokens.push(token);
    set(this, 'tokens', A(tokens));
  }

  remove(id) {
    let token = this.tokens.findBy('id', id);
    let { next, previous } = token;
    if (next) {
      next.previous = previous;
    }

    if (previous) {
      previous.next = next;
    }

    token.previous = token.next = null;

    let tokens = A([...this.tokens]);
    tokens.removeObject(token);
    set(this, 'tokens', A(tokens));
  }

  @computed('tokens')
  get visibleTokens() {
    let tokens = this.tokens;
    let i = tokens ? tokens.length : 0;
    let visible = [];
    while (i--) {
      let token = tokens[i];
      if (token.replace) {
        visible.unshift(token);
        break;
      } else {
        visible.unshift(token);
      }
    }
    return visible;
  }

  @computed('visibleTokens')
  get sortedTokens() {
    let visible = this.visibleTokens;
    let appending = true;
    let group = [];
    let groups = A([group]);
    let frontGroups = [];
    visible.forEach((token) => {
      if (token.front) {
        frontGroups.unshift(token);
      } else if (token.prepend) {
        if (appending) {
          appending = false;
          group = [];
          groups.push(group);
        }
        let lastToken = group[0];
        if (lastToken) {
          token = Object.assign({}, token);
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
  }

  toString() {
    let tokens = this.sortedTokens;
    let title = [];
    for (let i = 0, len = tokens.length; i < len; i++) {
      let token = tokens[i];
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

  _updateTitle() {
    const toBeTitle = this.toString();

    if (isFastBoot) {
      // in fastboot context "document" is instance of ember-fastboot/simple-dom document
      let titleEl = this.document.createElement('title');
      let titleContents = this.document.createTextNode(toBeTitle);
      titleEl.appendChild(titleContents);
      this.document.head.appendChild(titleEl);
    } else {
      this.document.title = toBeTitle;
    }
  }

  /**
   * Validate if there's more than one title element present.
   *
   * Example: ember-cli-head can cause conflicting updates.
   * @private
   */
  _validateExistingTitleElement() {
    if (isFastBoot) {
      return;
    }
    assert(
      "[ember-page-title]: Multiple or no <title> element(s) found. Check for other addons like ember-cli-head updating <title> as well.",
      document.head.querySelectorAll('title').length === 1
    );
  }
}
