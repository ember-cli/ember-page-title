import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: title', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

// Testem appends progress to the title...
// and there's no way to stop this at the moment
function title() {
  return findWithAssert('title', 'head').text().trim().replace(/^\(\d\/\d\)/, '');
}

test('the default configuration works', function(assert) {
  assert.expect(1);
  visit('/posts');

  andThen(function() {
    assert.equal(title(), 'My App | Posts');
  });
});

test('the replace attribute works', function(assert) {
  assert.expect(1);
  visit('/about');

  andThen(function() {
    assert.equal(title(), 'About My App');
  });
});

test('custom separators work', function(assert) {
  assert.expect(1);
  visit('/about/authors');

  andThen(function() {
    assert.equal(title(), 'About My App > Authors');
  });
});

test('custom separators are inherited', function(assert) {
  assert.expect(1);
  visit('/about/authors/profile');

  andThen(function() {
    assert.equal(title(), 'About My App > Authors > Profile');
  });
});

test('multiple components in a row work', function(assert) {
  assert.expect(1);
  visit('/posts/rails-is-omakase');

  andThen(function() {
    assert.equal(title(), 'My App | Posts | Rails is Omakase');
  });
});

test('the prepend declaration works', function(assert) {
  assert.expect(1);
  visit('/authors/tomster');

  andThen(function() {
    assert.equal(title(), 'My App | Tomster < Authors');
  });
});

test('replace nested in prepends work', function(assert) {
  assert.expect(1);
  visit('/hollywood');

  andThen(function() {
    assert.equal(title(), 'Hollywood ★ Stars everywhere');
  });
});

test('multitoken titles work', function(assert) {
  assert.expect(1);
  visit('/feeds/tomster');

  andThen(function() {
    assert.equal(title(), 'Tomster (@tomster)');
  });
});
