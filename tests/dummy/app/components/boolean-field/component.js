import Ember from 'ember';
import layout from './template';

const { get } = Ember;

export default Ember.Component.extend({
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
