import { A } from '@ember/array';
import { getOwner } from '@ember/application';
import Service from '@ember/service';
import { set, get, computed } from '@ember/object';
import { copy } from '@ember/object/internals';

/**
  @class page-title-list
  @extends Ember.Service
 */
export default Service.extend({

  init() {
    this._super();
    set(this, 'tokens', A());
    set(this, 'length', 0);
    this._removeExistingTitleTag();
  },

  /**
    The default separator to use between tokens.

    @property defaultSeparator
    @default ' | '
   */
  defaultSeparator: ' | ',

  /**
    The default prepend value to use.

    @property defaultPrepend
    @default null
   */
  defaultPrepend: null,

  /**
    The default replace value to use.

    @property defaultReplace
    @default null
   */
  defaultReplace: null,
  tokens: null,

  applyTokenDefaults(token) {
    let defaultSeparator = get(this, "defaultSeparator");
    let defaultPrepend = get(this, "defaultPrepend");
    let defaultReplace = get(this, "defaultReplace");

    if (token.separator == null) {
      token.separator = defaultSeparator;
    }

    if (token.prepend == null && defaultPrepend != null) {
      token.prepend = defaultPrepend;
    }

    if (token.replace == null && defaultReplace != null) {
      token.replace = defaultReplace;
    }
  },

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
  },

  push(token) {
    let tokenForId = this.tokens.findBy('id', token.id);
    if (tokenForId) {
      let index = this.tokens.indexOf(tokenForId);
      let tokens = copy(this.tokens);
      let previous = tokenForId.previous;
      token.previous = previous;
      token.next = tokenForId.next;
      this.inheritFromPrevious(token);
      this.applyTokenDefaults(token);

      tokens.splice(index, 1, token);
      set(this, 'tokens', A(tokens));
      return;
    }

    var previous = this.tokens.slice(-1)[0];
    if (previous) {
      token.previous = previous;
      previous.next = token;
      this.inheritFromPrevious(token);
    }

    this.applyTokenDefaults(token);

    let tokens = copy(this.tokens);
    tokens.push(token);
    set(this, 'tokens', A(tokens));
    set(this, 'length', get(this, 'length') + 1);
  },

  remove(id) {
    let token = this.tokens.findBy('id', id);
    var next = token.next;
    var previous = token.previous;
    if (next) {
      next.previous = previous;
    }

    if (previous) {
      previous.next = next;
    }

    token.previous = token.next = null;

    let tokens = A(copy(this.tokens));
    tokens.removeObject(token);
    set(this, 'tokens', A(tokens));
    set(this, 'length', get(this, 'length') - 1);
  },

  visibleTokens: computed('tokens', {
    get() {
      let tokens = get(this, 'tokens');
      let i = (tokens ? tokens.length : 0);
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
  }),

  sortedTokens: computed('visibleTokens', {
    get() {
      let visible = get(this, 'visibleTokens');
      let appending = true;
      let group = [];
      let groups = A([group]);
      visible.forEach((token) => {
        if (token.prepend) {
          if (appending) {
            appending = false;
            group = [];
            groups.push(group);
          }
          let lastToken = group[0];
          if (lastToken) {
            token = copy(token);
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

      return groups.reduce((E, group) => E.concat(group), []);
    }
  }),

  toString() {
    let tokens = get(this, 'sortedTokens');
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
  },

  /**
   * Remove any existing title tags from the head.
   * @private
   */
  _removeExistingTitleTag() {
    if (this._hasFastboot() || this._hasBooted()) {
      return;
    }

    let titles = document.getElementsByTagName('title');
    for (let i = 0; i < titles.length; i++) {
      let title = titles[i];
      title.parentNode.removeChild(title);
    }
  },

  _hasFastboot() {
    return !!getOwner(this).lookup('service:fastboot');
  },

  _hasBooted() {
    let application = getOwner(this).application;
    let isBooted = application._emberPageTitleInitialized;
    application._emberPageTitleInitialized = true;
    return isBooted;
  }
});
