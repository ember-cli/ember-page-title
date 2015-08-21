import Ember from "ember";

export default Ember.Route.extend({
  model: function () {
    return {
      title: 'My App'
    };
  }
});
