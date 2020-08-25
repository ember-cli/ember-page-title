import { A } from '@ember/array';
import Component from '@ember/component';
import { computed, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: '',

  titleList: service(),

  lastIndex: computed('titleList.{sortedTokens.length,tokens.length}', {
    get() {
      return this.titleList.sortedTokens.length - 1;
    },
  }),

  actions: {
    highlight(token) {
      let sortedTokens = A(this.titleList.sortedTokens);
      let wasActive = token.active;
      this.titleList.tokens.setEach('active', false);
      sortedTokens.setEach('active', false);

      if (!wasActive) {
        set(sortedTokens.findBy('id', token.id), 'active', true);
        set(token, 'active', true);
      }
    },
  },
});
