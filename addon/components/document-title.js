import Ember from "ember";
import Wormhole from "ember-wormhole/components/ember-wormhole";
import TokenList from "../system/token-list";

const tokens = new TokenList();

const get = Ember.get;
const set = Ember.set;

const computed = Ember.computed;

export default Wormhole.extend({
  // Public API
  separator: null,
  title: null,
  prepend: null,
  replace: false,
  hidden: false,

  destinationElement: computed(function () {
    return document.getElementsByTagName('title')[0];
  }),

  init: function () {
    // Clear default title
    if (tokens.length === 0) {
      document.title = '';
      if (get(this, 'separator') == null) {
        set(this, 'separator', ' | ');
      }
    }

    tokens.push(this);
    this._super.apply(this, arguments);
  },

  showSeparatorAfter: null,
  showSeparatorBefore: null,

  appendToDestination() {
    const previous = get(this, 'previous');
    const replace = get(this, 'replace');
    const element = get(this, 'destinationElement');

    if (previous && get(previous, 'prepend')) {
      if (get(previous, 'showSeparatorBefore')) {
        var pivot = get(previous, 'previous');
        if (pivot) {
          set(pivot, 'showSeparatorAfter', !replace);
        }
        set(previous, 'showSeparatorBefore', false);
      }
      set(this, 'showSeparatorAfter', !replace);
      this.prependRange(element, this._firstNode, this._lastNode, previous._lastNode);
    } else {
      set(this, 'showSeparatorBefore', !replace);
      this.appendRange(element, this._firstNode, this._lastNode);
    }
  },

  prependRange(destinationElement, firstNode, lastNode, referenceElement) {
    while (firstNode) {
      destinationElement.insertBefore(firstNode, referenceElement);
      firstNode = firstNode !== lastNode ? lastNode.parentNode.firstChild : null;
    }
  },

  willDestroyElement() {
    tokens.remove(this);
    this._super.apply(this, arguments);
  }
});
