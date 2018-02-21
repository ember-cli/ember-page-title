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
    }
  }),

  didReceiveAttrs() {
    set(this, 'token', {
      id: get(this, 'elementId'),
      title: get(this, 'title'),
      replace: get(this, 'replace'),
      separator: get(this, 'separator'),
      prepend: get(this, 'prepend'),
      active: get(this, 'token.active')
    });
    scheduleOnce('afterRender', () => {
      get(this, 'titleList').push(get(this, 'token'));
    });
  },

  click() {
    get(this, 'onactivate')(get(this, 'token'));
    return false;
  }
});
