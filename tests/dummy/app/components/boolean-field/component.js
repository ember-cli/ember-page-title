import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  classNames: ['boolean-field'],

  /**
    Called whenever the user changes the value.

    @event onchange
    @param {String} value The string
  */

  click() {
    this.onchange(!this.value);
    return false;
  }
});
