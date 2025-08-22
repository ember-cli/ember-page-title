import type PageTitleService from './services/page-title.ts';
import type { FastBootDocument } from './private-types.ts';
export default interface ServiceRegistry {
    /**
     * The service for managing the title of the page.
     */
    'page-title': PageTitleService;
    /**
     * ⚠️ This service is not provided by ember-page-title,
     *   but is needed by ember-page-title
     */
    '-document': FastBootDocument & {
        title?: string;
    };
}
//# sourceMappingURL=service-registry.d.ts.map