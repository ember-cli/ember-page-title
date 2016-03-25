import Ember from 'ember';

const get = Ember.get;
const { guidFor } = Ember;

function updateTitle(tokens) {
  document.title = tokens.toString();
}

function isFastBoot() {
  return typeof FastBoot !== "undefined";
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

    if (!isFastBoot()) {
      Ember.run.scheduleOnce('afterRender', null, updateTitle, tokens);
    }

    return '';
  },

  destroy() {
    let tokens = get(this, 'pageTitleList');
    let id = guidFor(this);
    tokens.remove(id);

    if (!isFastBoot()) {
      Ember.run.scheduleOnce('afterRender', null, updateTitle, tokens);
    }
  }
});
