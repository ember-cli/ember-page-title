import { service } from '@ember/service';
import Helper from '@ember/component/helper';
import { guidFor } from '@ember/object/internals';

import type Owner from '@ember/owner';
import type PageTitleService from '../services/page-title.ts';
import type { PageTitleToken } from '../private-types.ts';

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

  tokenId = guidFor(this);

  constructor(owner: Owner) {
    super(owner);
    this.tokens.push({ id: this.tokenId });
  }

  compute(params: string[], userOptions: PageTitleHelperOptions) {
    const options = {
      ...userOptions,
      id: this.tokenId,
      title: params.join(''),
    };

    this.tokens.push(options);
    this.tokens.scheduleTitleUpdate();
    // We must return an empty value here because otherwise
    // invoking the pageTitle helper will render something
    // in the component it's used in, and we don't want that.
    //
    // pageTitle is a side-effecting helper.
    // We *synchronize* the document.title with our internal state.
    return '';
  }

  willDestroy() {
    super.willDestroy();
    this.tokens.remove(this.tokenId);
    this.tokens.scheduleTitleUpdate();
  }
}
