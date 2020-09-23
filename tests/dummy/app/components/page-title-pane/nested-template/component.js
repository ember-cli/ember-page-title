import { A } from '@ember/array';
import Component from '@ember/component';
import { computed, set } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
  classNames: ['nested-template'],
  classNameBindings: ['active:active'],

  active: computed('titleList.{tokens.@each.active}', 'token.id', {
    get() {
      let tokens = A(this.titleList.tokens);
      let token = tokens.findBy('id', this.token.id);
      return token && token.active;
    },
  }),

  didReceiveAttrs() {
    set(this, 'token', {
      id: this.elementId,
      title: this.title,
      replace: this.replace,
      separator: this.separator,
      prepend: this.prepend,
      active: this.token ? this.token.active : false
    });
    scheduleOnce('afterRender', this, this.pushToken);
  },

  click() {
    this.onactivate(this.token);
    return false;
  },

  pushToken() {
    this.titleList.push(this.token);
  }
});
