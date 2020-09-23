import { inject as service } from '@ember/service';
import Helper from '@ember/component/helper';
import { guidFor } from '@ember/object/internals';
import { assign } from '@ember/polyfills';

/**
  `{{page-title}}` is used to communicate with

  @public
  @method page-title
 */
export default Helper.extend({
  tokens: service('page-title-list'),

  get tokenId() {
    return guidFor(this);
  },

  init() {
    this._super(...arguments);
    this.tokens.push({ id: this.tokenId });
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
    let hash = assign(
      {},
      _hash,
      {
        id: this.tokenId,
        title: params.join('')
      }
    );

    this.tokens.push(hash);
    this.tokens.scheduleTitleUpdate();
    return '';
  },

  destroy() {
    this.tokens.remove(this.tokenId);
    this.tokens.scheduleTitleUpdate();
  },
});
