import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
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

  this.mount('addon-docs', { path: '/docs' });
});

export default Router;
