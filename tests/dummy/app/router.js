import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('about', function () {
    this.route('authors', function() {
      this.route('profile');
    });
  });
  this.resource('posts');
  this.resource('post', { path: '/posts/:post_id' });
  this.resource('author', { path: '/authors/:author_id' });
  this.resource('hollywood', { path: '/hollywood' });
  this.resource('feed', { path: '/feeds/:name' });
});

export default Router;
