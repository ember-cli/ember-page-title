import { Promise as EmberPromise } from 'rsvp';
import Route from '@ember/routing/route';
import { capitalize } from '@ember/string';

export default Route.extend({
  model(params) {
    return new EmberPromise(function (resolve) {
      setTimeout(function () {
        resolve({
          name: capitalize(params.name),
          handle: `@${params.name}`
        });
      }, 100);
    });
  }
});
