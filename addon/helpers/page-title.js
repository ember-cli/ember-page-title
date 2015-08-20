import Ember from 'ember';

const get = Ember.get;
const { guidFor } = Ember;

function updateTitle(tokens) {
  document.title = tokens.toString();
}

export default Ember.Helper.extend({
  pageTitleList: Ember.inject.service(),

  init() {
    this._super();
    let tokens = get(this, 'pageTitleList');
    tokens.push({ id: guidFor(this) });
  },

  compute(params, hash) {
    let tokens = get(this, 'pageTitleList');
    hash.id = guidFor(this);
    hash.title = params.join('');
    tokens.push(hash);
    Ember.run.scheduleOnce('afterRender', null, updateTitle, tokens);
    return '';
  },

  destroy() {
    let tokens = get(this, 'pageTitleList');
    let id = guidFor(this);
    tokens.remove(id);
    Ember.run.scheduleOnce('afterRender', null, updateTitle, tokens);
  }
});
