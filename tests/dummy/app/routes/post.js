import Route from '@ember/routing/route';
import { later } from '@ember/runloop';
import RSVP from 'rsvp';

export default Route.extend({
  model: function () {
    let deferred = RSVP.defer();
    later(function () {
      deferred.resolve({
        title: "Rails is Omakase"
      });
    }, 200);
    return deferred.promise;
  }
});
