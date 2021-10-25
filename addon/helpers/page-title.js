import { inject as service } from '@ember/service';
import Helper from '@ember/component/helper';
import { guidFor } from '@ember/object/internals';

/**
  `{{page-title}}` helper used to set the title of the current route context.

  @public
  @method page-title
 */
export default class PageTitle extends Helper {
  @service('page-title-list')
  tokens;

  get tokenId() {
    return guidFor(this);
  }

  constructor() {
    super(...arguments);
    this.tokens.push({ id: this.tokenId });
  }

  compute(params, _hash) {
    let hash = {
      ..._hash,
      id: this.tokenId,
      title: params.join(''),
    };

    this.tokens.push(hash);
    this.tokens.scheduleTitleUpdate();
    return '';
  }

  willDestroy() {
    super.willDestroy();
    this.tokens.remove(this.tokenId);
    this.tokens.scheduleTitleUpdate();
  }
}
