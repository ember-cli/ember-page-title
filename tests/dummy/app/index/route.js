import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      title: 'Ember Page Title',
      post: {
        title: 'Ember.js'
      }
    };
  }
});
