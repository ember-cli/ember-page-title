import Ember from 'ember';
import PageTitleList from 'ember-page-title/services/page-title-list';

const { get, set, computed } = Ember;

export default Ember.Component.extend({

  tagName: '',

  titleList: computed({
    get() {
      return PageTitleList.create();
    }
  }),

  lastIndex: computed('titleList.tokens.length', {
    get() {
      return get(this, 'titleList.sortedTokens.length') - 1;
    }
  }),

  actions: {
    highlight(token) {
      let sortedTokens = Ember.A(get(this, 'titleList.sortedTokens'));
      let wasActive = token.active;
      get(this, 'titleList.tokens').setEach('active', false);
      sortedTokens.setEach('active', false);

      if (!wasActive) {
        set(sortedTokens.findBy('id', token.id), 'active', true);
        set(token, 'active', true);
      }
    }
  }

});
