import Component from '@ember/component';
import { get } from '@ember/object';
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
    get(this, 'onchange')(!get(this, 'value'));
    return false;
  }
});
