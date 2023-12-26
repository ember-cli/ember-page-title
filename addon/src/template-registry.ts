import { default as pageTitle } from './helpers/page-title.ts';

export default interface Registry {
  'page-title': typeof pageTitle;
}
