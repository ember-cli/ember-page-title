import Ember from 'ember';

const { get, set, guidFor, merge, getOwner } = Ember;

function updateTitle(tokens) {
  set(this, 'title', tokens.toString());
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
    Ember.run.scheduleOnce('afterRender', get(this, 'headData'), updateTitle, tokens);
    return '';
  },

  destroy() {
    let tokens = get(this, 'pageTitleList');
    let id = guidFor(this);
    tokens.remove(id);

    let activeTransition = getOwner(this).lookup('router:main').get('router.activeTransition');
    let headData = get(this, 'headData');
    if (activeTransition) {
      activeTransition.promise.finally(function () {
        if (headData.isDestroyed) { return; }
        Ember.run.scheduleOnce('afterRender', headData, updateTitle, tokens);
      });
    } else {
      Ember.run.scheduleOnce('afterRender', headData, updateTitle, tokens);
    }
  }
});
