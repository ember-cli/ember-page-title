import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return {
      tokens: [{
        value: 'ember-page-title',
        separator: ' | '
      }],
      title: 'Blog',
      post: {
        title: 'Ember.js'
      }
    };
  }
});
