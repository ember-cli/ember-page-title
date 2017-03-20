import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return {
      tokens: [{
        value: 'ember-cli-page-title',
        separator: ' | '
      }],
      title: 'Blog',
      post: {
        title: 'Ember.js'
      }
    };
  }
});
