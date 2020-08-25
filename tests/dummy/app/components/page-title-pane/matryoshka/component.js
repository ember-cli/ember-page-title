import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  item: computed('items', {
    get() {
      return this.items[0];
    }
  }),

  nextItems: computed('items', {
    get() {
      return this.items.slice(1);
    }
  })
});
