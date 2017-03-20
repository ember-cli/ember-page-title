import Ember from 'ember';

const { get, computed } = Ember;

export default Ember.Component.extend({
  item: computed('items', {
    get() {
      return get(this, 'items')[0];
    }
  }),

  nextItems: computed('items', {
    get() {
      return get(this, 'items').slice(1);
    }
  })
});
