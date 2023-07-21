import { inject as service } from '@ember/service';
import Helper from '@ember/component/helper';
import { guidFor } from '@ember/object/internals';
import PageTitleService, { PageTitleToken } from '../services/page-title';
import type Owner from '@ember/owner';

export type PageTitleHelperOptions = Pick<
  PageTitleToken,
  'prepend' | 'front' | 'replace' | 'separator'
>;

interface PageTitleSignature {
  Args: {
    Positional: string[];
    Named: PageTitleHelperOptions;
  };
  Return: void;
}

/**
  `{{page-title}}` helper used to set the title of the current route context.

  @public
  @method page-title
 */
export default class PageTitle extends Helper<PageTitleSignature> {
  @service('page-title')
  declare tokens: PageTitleService;

  get tokenId(): string {
    return guidFor(this);
  }

  constructor(owner: Owner | undefined) {
    super(owner);
    this.tokens.push({ id: this.tokenId });
  }

  compute(params: string[], _hash: PageTitleHelperOptions): void {
    const hash = {
      ..._hash,
      id: this.tokenId,
      title: params.join(''),
    };

    this.tokens.push(hash);
    this.tokens.scheduleTitleUpdate();
  }

  willDestroy() {
    super.willDestroy();
    this.tokens.remove(this.tokenId);
    this.tokens.scheduleTitleUpdate();
  }
}
