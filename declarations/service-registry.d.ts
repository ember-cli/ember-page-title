import PageTitleService from './services/page-title.ts';
import type { FastBootDocument } from './private-types.ts';
/**
 * For use with `withModules` (ember-resolver)
 * or `modules` (strict resolver)
 *
 * With the strict resolver, no argument is needed.
 *
 * Provides the service.
 * This is not needed if you use service auto-discovery from embroider.
 */
export declare function entries(modulePrefix?: string): {
    [x: string]: typeof PageTitleService;
};
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