import { scheduleOnce } from '@ember/runloop';
import { inject as service } from '@ember/service';
import Helper from '@ember/component/helper';
import { set, get } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { assign } from '@ember/polyfills';
import { getOwner } from '@ember/application';

function updateTitle(tokens) {
  set(this, 'title', tokens.toString());
}

/**
  `{{page-title}}` is used to communicate with

  @public
  @method page-title
 */
export default Helper.extend({
  pageTitleList: service(),
  headData: service(),

  init() {
    this._super();
    let tokens = get(this, 'pageTitleList');
    tokens.push({ id: guidFor(this) });
  },

  compute(params, _hash) {
    // page-title used via title ast transform, which is deprecated
    if (_hash && _hash._deprecate) {
      // eslint-disable-next-line no-console
      console.warn(
        'Using `{{title}}` helper is deprecated, use `{{page-title}}` instead. ' +
          _hash._deprecate
      );
    }
    let tokens = get(this, 'pageTitleList');
    let hash = assign({}, _hash);
    hash.id = guidFor(this);
    hash.title = params.join('');
    tokens.push(hash);
    scheduleOnce('afterRender', get(this, 'headData'), updateTitle, tokens);
    return '';
  },

  destroy() {
    let tokens = get(this, 'pageTitleList');
    let id = guidFor(this);
    tokens.remove(id);

    let router = getOwner(this).lookup('router:main');
    let routes = router._routerMicrolib || router.router;
    let { activeTransition } = routes || {};
    let headData = get(this, 'headData');
    if (activeTransition) {
      activeTransition.promise.finally(function () {
        if (headData.isDestroyed) {
          return;
        }
        scheduleOnce('afterRender', headData, updateTitle, tokens);
      });
    } else {
      scheduleOnce('afterRender', headData, updateTitle, tokens);
    }
  },
});
