import Ember from 'ember';

const { get, set, guidFor, merge } = Ember;

function updateTitle(tokens) {
  set(this, 'headData.title', tokens.toString());
}

export default Ember.Helper.extend({
  pageTitleList: Ember.inject.service(),
  headData: Ember.inject.service(),

  init() {
    this._super();
    let tokens = get(this, 'pageTitleList');
    tokens.push({ id: guidFor(this) });
  },

  compute(params, _hash) {
    let tokens = get(this, 'pageTitleList');
    let hash = merge({}, _hash);
    hash.id = guidFor(this);
    hash.title = params.join('');
    tokens.push(hash);
    Ember.run.scheduleOnce('afterRender', this, updateTitle, tokens);
    return '';
  },

  destroy() {
    let tokens = get(this, 'pageTitleList');
    let id = guidFor(this);
    tokens.remove(id);
    Ember.run.scheduleOnce('afterRender', this, updateTitle, tokens);
  }
});
