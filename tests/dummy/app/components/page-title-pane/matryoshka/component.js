import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
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
