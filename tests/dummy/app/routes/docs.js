import Route from '@ember/routing/route';

export default class DocsRoute extends Route {
  model() {
    return {
      title: 'Ember Page Title',
      post: {
        title: 'Ember.js'
      }
    };
  }
}
