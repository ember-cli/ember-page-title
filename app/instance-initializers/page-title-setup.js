import Ember from 'ember';

export default {
  name: 'page-title-setup-browser',
  before: 'head-browser',
  initialize() {
    if (typeof FastBoot === 'undefined') {
      // Remove <title> tags from the initial index.html page, so they can be correctly replaced
      // and managed by ember-cli-head.
      let titles = document.getElementsByTagName('title');
      for (let i = 0; i < titles.length; i++) {
        let title = titles[i];
        title.parentNode.removeChild(title);
      }
    }
  }
};
