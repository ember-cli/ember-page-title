import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return {
      title: 'Blog',
      post: {
        title: 'Ember.js'
      }
    };
  }
});
