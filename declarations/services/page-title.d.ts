import Service from '@ember/service';
import type RouterService from '@ember/routing/router-service';
import type Owner from '@ember/owner';
import type { PageTitleToken, PageTitleConfig } from '../private-types.ts';
/**
  @class page-title
  @extends Ember.Service
 */
export default class PageTitleService extends Service {
    router: RouterService;
    private document;
    tokens: PageTitleToken[];
    _defaultConfig: PageTitleConfig;
    constructor(owner: Owner);
    applyTokenDefaults(token: PageTitleToken): void;
    inheritFromPrevious(token: PageTitleToken): void;
    push(token: PageTitleToken): void;
    remove(id: PageTitleToken['id']): void;
    get visibleTokens(): PageTitleToken[];
    get sortedTokens(): PageTitleToken[];
    scheduleTitleUpdate: () => void;
    toString(): string;
    willDestroy(): void;
    private _updateTitle;
    /**
     * Validate if there's more than one title element present.
     *
     * Example: ember-cli-head can cause conflicting updates.
     * @private
     */
    private _validateExistingTitleElement;
    /**
     * Find token by id
     *
     * @param {String} id
     * @private
     */
    private _findTokenById;
    updateFastbootTitle(toBeTitle: string): void;
    titleDidUpdate(_title: string): void;
}
//# sourceMappingURL=page-title.d.ts.map