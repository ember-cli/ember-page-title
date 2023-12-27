// @ts-nocheck
import { inject as service } from '@ember/service';
import Helper from '@ember/component/helper';
import { guidFor } from '@ember/object/internals';

import type PageTitleService from '../services/page-title.ts';
import type { PageTitleToken } from '../services/page-title.ts';

export type PageTitleHelperOptions = Pick<
  PageTitleToken,
  'prepend' | 'front' | 'replace' | 'separator'
>;

interface Signature {
  Args: {
    Positional: string[];
    Named: PageTitleHelperOptions;
  };
  Return: void;
}

/**
 * `{{pageTitle}}` helper used to set the title of the current route context.
 *
 * ```gjs
 * import { pageTitle } from 'ember-page-title';
 *
 * <template>
 *   {{pageTitle "the text to set the tab's title to"}}
 *   {{pageTitle \@model.post.title}}
 * </template>
 * ```
 */
export default class PageTitle extends Helper<Signature> {
  @service('page-title') declare tokens: PageTitleService;

  get tokenId(): string {
    return guidFor(this);
  }

  constructor() {
    super(...arguments);
    this.tokens.push({ id: this.tokenId });
  }

  compute(params, _hash) {
    const hash = {
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
