import { default as pageTitle } from './helpers/page-title.ts';

export default interface Registry {
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
