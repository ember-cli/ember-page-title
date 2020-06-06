import { A } from '@ember/array';
import Component from '@ember/component';
import { computed, set, get } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
  classNames: ['nested-template'],
  classNameBindings: ['active:active'],

  active: computed('token.id', 'titleList.tokens.@each.active', {
    get() {
      let sortedTokens = A(get(this, 'titleList.sortedTokens'));
      let token = sortedTokens.findBy('id', get(this, 'token.id'));
      return get(token || {}, 'active');
    },
  }),

  didReceiveAttrs() {
    set(this, 'token', {
      id: this.elementId,
      title: this.title,
      replace: this.replace,
      separator: this.separator,
      prepend: this.prepend,
      active: get(this, 'token.active'),
    });
    scheduleOnce('afterRender', () => {
      this.titleList.push(this.token);
    });
  },

  click() {
    this.onactivate(this.token);
    return false;
  },
});
