import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', function () {
    this.route('authors', function() {
      this.route('profile');
    });
  });
  this.route('posts');
  this.route('post', { path: '/posts/:post_id' });
  this.route('author', { path: '/authors/:author_id' });
  this.route('hollywood', { path: '/hollywood' });
  this.route('feed', { path: '/feeds/:name' });
});

export default Router;
