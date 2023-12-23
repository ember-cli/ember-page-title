import { pageTitle } from './helpers/page-title';

export default interface Registry {
	'page-title': HelperLike<PageTitleHelperSignature>;
}
