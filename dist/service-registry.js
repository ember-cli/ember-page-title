import PageTitleService from './services/page-title.js';

/**
 * For use with `withModules` (ember-resolver)
 * or `modules` (strict resolver)
 *
 * With the strict resolver, no argument is needed.
 *
 * Provides the service.
 * This is not needed if you use service auto-discovery from embroider.
 */
function entries(modulePrefix) {
  const prefix = modulePrefix || '.';
  return {
    [`${prefix}/services/page-title`]: PageTitleService
  };
}

export { entries };
//# sourceMappingURL=service-registry.js.map
