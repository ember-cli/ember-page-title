import TokenList from "../system/token-list";

let tokens = new TokenList();

export default Ember.Component.extend({
  // Public API
  separator: null,
  title: null,
  prepend: null,
  replace: false,

  layoutName: 'ember-document-title/templates/components/document-title'

  isVirtual: true,
  tagName: '',
  hidden: false,

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

  showSeparatorAfter: function () {
    return !get(this, 'replace') && get(this, 'prepend') && get(this, 'previous');
  }.property('prepend', 'previous'),

  showSeparatorBefore: function () {
    return !get(this, 'replace') && !get(this, 'prepend') && get(this, 'previous');
  }.property('prepend', 'previous'),

  render: function (buffer) {
    let titleTag = document.getElementsByTagName('title')[0];
    let previous = get(this, 'previous');
    if (get(this, 'prepend') && previous) {
      this._morph = buffer.dom.insertMorphBefore(titleTag, previous._morph.start);
    } else {
      this._morph = buffer.dom.appendMorph(titleTag);
    }
    this._super.apply(this, arguments);
  },

  willClearRender: function () {
    tokens.remove(this);
    let morph = this._morph;
    Ember.run.schedule('render', morph, morph.destroy);
    this._super.apply(this, arguments);
  }
});
