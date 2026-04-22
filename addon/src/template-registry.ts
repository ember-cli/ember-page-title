import { default as pageTitle } from './helpers/page-title.ts';

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
export function entries(modulePrefix?: string) {
  const prefix = modulePrefix || '.';

  return {
    [`${prefix}/helpers/page-title`]: pageTitle,
  };
}

export default interface LooseModeTemplateRegistry {
  /**
   * `{{page-title}}` helper used to set the title of the current route context
   *
   * ```hbs
   * {{page-title "the text to set the tab's title to"}}
   * {{page-title \@model.post.title}}
   * ```
   */
  'page-title': typeof pageTitle;
}
