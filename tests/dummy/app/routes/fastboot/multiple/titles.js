import Route from '@ember/routing/route';
import { Promise as EmberPromise } from 'rsvp';

export default class FastbootMultipleTitlesRoute extends Route {
  model() {
    return new EmberPromise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 200);
    });
  }
}
