import Route from '@ember/routing/route';
import { Promise as EmberPromise } from 'rsvp';

export default class PostRoute extends Route {
  model() {
    return new EmberPromise(function (resolve) {
      setTimeout(function () {
        resolve({
          title: 'Rails is Omakase',
        });
      }, 200);
    });
  }
}
