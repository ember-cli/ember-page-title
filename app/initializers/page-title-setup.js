import Ember from 'ember';

export default {
  name: 'page-title-setup',
  initialize() {
    // Remove <title> tags from the initial index.html page, so they can be correctly replaced
    // and managed by ember-cli-head. Note: we only do this if Ember.$ is available (ie. in
    // non-fastboot apps). Fastboot apps do not use this and must remove <title> from index.html.
    if (Ember.$) {
      Ember.$('title').remove();
    }
  },
};
