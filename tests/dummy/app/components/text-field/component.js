import { isEmpty } from '@ember/utils';
import { later } from '@ember/runloop';
import Component from '@ember/component';
import { set, computed } from '@ember/object';
// TODO migrate away from mixin pattern
// eslint-disable-next-line ember/no-mixins
import Autoresize from 'ember-autoresize/mixins/autoresize';
import layout from './template';

/**
  A `{{text-field}}` is a drop in replacement
  for `<input type="text">`.

  The simplest `{{text-field}}` would be:

  ```htmlbars
  {{text-field value=score onchange=(action (mut score))}}
  ```

  @public
  @class TextField
  @extends Ember.Component
 */

export default Component.extend(Autoresize, {
  layout,
  classNames: ['text-field'],

  /**
    Called whenever the user changes the value.

    @event onchange
    @param {String} value The string
   */

  /**
    The `name` property of the `input` element.

    @property name
    @type String
    @default null
   */
  name: null,

  /**
    Whether or not the field is disabled.

    @property disabled
    @type Boolean
    @default false
   */
  disabled: false,

  shouldResizeWidth: true,

  significantWhitespace: true,

  autoResizeText: computed('value', {
    get() {
      return this.value || '';
    }
  }),

  didInsertElement() {
    set(this, 'autoresizeElement', this.element.querySelector('input'));
    later(this, function () {
      set(this, 'autoresizeElement', this.element.querySelector('input'));
      later(this, 'measureSize', 100);
    });
  },

  didRender() {
    this._updateDisplayValue(this._getValue());
  },

  _getValue() {
    return this.value;
  },

  _setValue(value) {
    if (isEmpty(value) || value == null) {
      this.onchange(null);
    } else {
      this.onchange(value);
    }
    this._updateDisplayValue(value);
  },

  _updateDisplayValue(displayValue) {
    let input = this.element.querySelector('input');
    let selectionStart = input.selectionStart;
    let selectionEnd = input.selectionEnd;

    input.value = displayValue || '';
    input.selectionStart = selectionStart;
    input.selectionEnd = selectionEnd;
  },

  actions: {
    reformat() {
      let input = this.element.querySelector('input');
      this._setValue(input.value);
    },
    blackHole(evt) {
      evt.stopPropagation();
      return false;
    }
  }
});
