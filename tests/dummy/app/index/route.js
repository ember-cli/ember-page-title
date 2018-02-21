import Route from '@ember/routing/route';

export default Route.extend({
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
