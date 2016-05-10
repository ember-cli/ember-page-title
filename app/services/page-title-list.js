import PageTitleList from 'ember-page-title/services/page-title-list';
import config from '../config/environment';

function capitalize(key) {
  return key.charAt(0).toUpperCase() + key.slice(1);
}

let defaults = {};
['separator', 'prepend', 'replace'].forEach(function (key) {
  if (config.pageTitle && config.pageTitle[key]) {
    defaults[`default${capitalize(key)}`] = config.pageTitle[key];
  }
});

export default PageTitleList.extend(defaults);
