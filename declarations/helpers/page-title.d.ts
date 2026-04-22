import Helper from '@ember/component/helper';
import type Owner from '@ember/owner';
import type PageTitleService from '../services/page-title.ts';
import type { PageTitleToken } from '../private-types.ts';
export type PageTitleHelperOptions = Pick<PageTitleToken, 'prepend' | 'front' | 'replace' | 'separator'>;
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
    tokens: PageTitleService;
    tokenId: string;
    constructor(owner: Owner);
    compute(params: string[], userOptions: PageTitleHelperOptions): string;
    willDestroy(): void;
}
export {};
//# sourceMappingURL=page-title.d.ts.map