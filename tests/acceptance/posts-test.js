import { click, find, waitUntil, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { getPageTitle } from '../helpers/get-page-title';

module('Acceptance: title', function(hooks) {
  setupApplicationTest(hooks);

  test('the default configuration works', async function (assert) {
    assert.expect(1);
    await visit('/posts');

    assert.equal(getPageTitle(), 'Posts | My App');
  });

  test('the replace attribute works', async function (assert) {
    assert.expect(1);
    await visit('/about');

    assert.equal(getPageTitle(), 'About My App');
  });

  test('custom separators work', async function (assert) {
    assert.expect(1);
    await visit('/about/authors');

    assert.equal(getPageTitle(), 'Authors > About My App');
  });

  test('custom separators are inherited', async function (assert) {
    assert.expect(1);
    await visit('/about/authors/profile');

    assert.equal(getPageTitle(), 'Profile > Authors > About My App');
  });

  test('multiple components in a row work', async function (assert) {
    assert.expect(1);
    await visit('/posts/rails-is-omakase');

    assert.equal(getPageTitle(), 'Rails is Omakase | Posts | My App');
  });

  test('the prepend=false declaration works', async function (assert) {
    assert.expect(1);
    await visit('/authors/tomster');

    assert.equal(getPageTitle(), 'My App | Authors < Tomster');
  });

  test('replace nested in prepends work', async function (assert) {
    assert.expect(1);
    await visit('/hollywood');

    assert.equal(getPageTitle(), 'Hollywood ★ Stars everywhere');
  });

  test('multitoken titles work', async function (assert) {
    assert.expect(1);
    await visit('/feeds/tomster');

    assert.equal(getPageTitle(), 'Tomster (@tomster)');
  });

  test('loading substates are not shown', async function (assert) {
    assert.expect(3);
    await visit('/feeds/tomster');
    assert.equal(getPageTitle(), 'Tomster (@tomster)');

    await click('#zoey');
    await waitUntil(() => {
      return find('div[data-test-substate-loading]') === null;
    });
    assert.equal(getPageTitle(), 'Zoey (@zoey)');

    await click('#tomster');
    await waitUntil(() => {
      return find('div[data-test-substate-loading]') === null;
    });
    assert.equal(getPageTitle(), 'Tomster (@tomster)');
  });

  test('front tokens work', async function (assert) {
    assert.expect(1);
    await visit('/reader');

    assert.equal(getPageTitle(), '(10) Reader | My App');
  });

  test('does not throw if no title element exist', async function (assert) {
    document.head.querySelectorAll('title').forEach((titleElement) => {
      document.head.removeChild(titleElement);
    });
    await visit('/posts');
    assert.equal(getPageTitle(), 'Posts | My App');
  });
});
