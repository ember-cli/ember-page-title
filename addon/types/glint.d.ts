import type PageTitle from './helpers/page-title';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'page-title': typeof PageTitle;
    PageTitle: typeof PageTitle;
  }
}
