import { A } from '@ember/array';
import Component from '@ember/component';
import { computed, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: '',

  titleList: service(),

  lastIndex: computed('titleList.{tokens.length}', {
    get() {
      return this.titleList.tokens.length - 1;
    },
  }),

  actions: {
    highlight(token) {
      let tokens = A(this.titleList.tokens);
      let wasActive = token.active;
      tokens.setEach('active', false);
      set(token, 'active', !wasActive);
    },
  },
});
