import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about', function () {
    this.route('authors', function () {
      this.route('profile');
    });
  });
  this.route('posts');
  this.route('post', { path: '/posts/:post_id' });
  this.route('author', { path: '/authors/:author_id' });
  this.route('hollywood');
  this.route('feed', { path: '/feeds/:name' });
  this.route('reader');
  this.route('docs', { path: '/' });
  this.route('fastboot', function () {
    this.route('multiple', function () {
      this.route('titles');
    });
  });
});
