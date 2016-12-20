import Ember from "ember";

const { capitalize } = Ember.String;

export default Ember.Route.extend({
  model(params) {
    return new Ember.RSVP.Promise(function (resolve) {
      setTimeout(function () {
        resolve({
          name: capitalize(params.name),
          handle: `@${params.name}`
        });
      }, 100);
    });
  }
});
