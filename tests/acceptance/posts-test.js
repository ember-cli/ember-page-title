import { click, visit } from '@ember/test-helpers';
import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: title', function(hooks) {
  hooks.beforeEach(function() {
    application = startApp();
  });

  hooks.afterEach(function() {
    run(application, 'destroy');
  });

  // Testem appends progress to the title...
  // and there's no way to stop this at the moment
  function title() {
    return findWithAssert('title', 'head').text().trim().replace(/^\(\d+\/\d+\)/, '');
  }

  test('the default configuration works', async function (assert) {
    assert.expect(1);
    await visit('/posts');

    assert.equal(title(), 'My App | Posts');
  });

  test('the replace attribute works', async function (assert) {
    assert.expect(1);
    await visit('/about');

    assert.equal(title(), 'About My App');
  });

  test('custom separators work', async function (assert) {
    assert.expect(1);
    await visit('/about/authors');

    assert.equal(title(), 'About My App > Authors');
  });

  test('custom separators are inherited', async function (assert) {
    assert.expect(1);
    await visit('/about/authors/profile');

    assert.equal(title(), 'About My App > Authors > Profile');
  });

  test('multiple components in a row work', async function (assert) {
    assert.expect(1);
    await visit('/posts/rails-is-omakase');

    assert.equal(title(), 'My App | Posts | Rails is Omakase');
  });

  test('the prepend declaration works', async function (assert) {
    assert.expect(1);
    await visit('/authors/tomster');

    assert.equal(title(), 'My App | Tomster < Authors');
  });

  test('replace nested in prepends work', async function (assert) {
    assert.expect(1);
    await visit('/hollywood');

    assert.equal(title(), 'Hollywood ★ Stars everywhere');
  });

  test('multitoken titles work', async function (assert) {
    assert.expect(1);
    await visit('/feeds/tomster');

    assert.equal(title(), 'Tomster (@tomster)');
  });

  test('loading substates are not shown', async function (assert) {
    assert.expect(4);
    await visit('/feeds/tomster');
    assert.equal(title(), 'Tomster (@tomster)');

    await click('#zoey');
    assert.equal(title(), 'Zoey (@zoey)');

    let promise = await click('#tomster');
    assert.equal(title(), 'Zoey (@zoey)');

    await promise;
    assert.equal(title(), 'Tomster (@tomster)');
  });
});
