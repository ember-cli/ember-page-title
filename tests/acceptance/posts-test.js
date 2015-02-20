import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: document-title', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('the default configuration works', function(assert) {
  assert.expect(1);
  visit('/posts');

  andThen(function() {
    assert.equal(document.title, 'My App | Posts');
  });
});

test('the replace attribute works', function(assert) {
  assert.expect(1);
  visit('/about');

  andThen(function() {
    assert.equal(document.title, 'About My App');
  });
});

test('custom separators work', function(assert) {
  assert.expect(1);
  visit('/about/authors');

  andThen(function() {
    assert.equal(document.title, 'About My App > Authors');
  });
});

test('multiple components in a row work', function(assert) {
  assert.expect(1);
  visit('/posts/rails-is-omakase');

  andThen(function() {
    assert.equal(document.title, 'My App | Posts | Rails is Omakase');
  });
});

test('the prepend declaration works', function(assert) {
  assert.expect(1);
  visit('/authors/tomster');

  andThen(function() {
    assert.equal(document.title, 'My App | Tomster < Authors');
  });
});
