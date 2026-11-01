import PageTitle from './helpers/page-title.js';

/**
 * For use with `withModules` (ember-resolver)
 * or `modules` (strict resolver)
 *
 * With the strict resolver, no argument is needed.
 *
 * Provides the {{page-title}} helper for loose-mode / hbs users.
 * This is not needed at all if you use gjs/gts with page-title.
 * This is also not needed if you have app-tree auto-discovery from embroider.
 */
function entries(modulePrefix) {
  const prefix = modulePrefix || '.';
  return {
    [`${prefix}/helpers/page-title`]: PageTitle
  };
}

export { entries };
//# sourceMappingURL=template-registry.js.map
