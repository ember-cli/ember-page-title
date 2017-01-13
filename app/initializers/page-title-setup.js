import Ember from 'ember';

export default {
  name: 'page-title-setup',
  initialize() {
    // Remove <title> tags from the initial index.html page, so they can be correctly replaced
    // and managed by ember-cli-head.
    let titles = document.getElementsByTagName('title');
    for (let i = 0, len = titles.length; i < len; i++) {
      titles[i].remove();
    }
  },
};
