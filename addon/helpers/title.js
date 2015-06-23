import Ember from 'ember';

const get = Ember.get;
const { guidFor } = Ember;

function updateTitle(tokens) {
  document.title = tokens.toString();
}

export default Ember.Helper.extend({
  documentTitleList: Ember.inject.service(),

  init() {
    this._super();
    let tokens = get(this, 'documentTitleList');
    tokens.push({ id: guidFor(this) });
  },

  compute([title], { separator = ' | ', prepend, replace }) {
    let tokens = get(this, 'documentTitleList');
    let id = guidFor(this);
    tokens.push({
      id,
      title,
      separator,
      prepend,
      replace
    });
    Ember.run.scheduleOnce('afterRender', null, updateTitle, tokens);
    return '';
  },

  destroy() {
    let tokens = get(this, 'documentTitleList');
    let id = guidFor(this);
    tokens.remove(id);
    Ember.run.scheduleOnce('afterRender', null, updateTitle, tokens);
  }
});
