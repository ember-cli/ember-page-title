import PageTitleService from 'ember-page-title/services/page-title';
import { click, find, waitUntil, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { getPageTitle } from 'ember-page-title/test-support';

module('Acceptance: title', function (hooks) {
  setupApplicationTest(hooks);

  test('the default configuration works', async function (assert) {
    await visit('/posts');

    assert.strictEqual(getPageTitle(), 'Posts | My App');
  });

  test('the replace attribute works', async function (assert) {
    await visit('/about');

    assert.strictEqual(getPageTitle(), 'About My App');
  });

  test('custom separators work', async function (assert) {
    await visit('/about/authors');

    assert.strictEqual(getPageTitle(), 'Authors > About My App');
  });

  test('custom separators are inherited', async function (assert) {
    await visit('/about/authors/profile');

    assert.strictEqual(getPageTitle(), 'Profile > Authors > About My App');
  });

  test('multiple components in a row work', async function (assert) {
    await visit('/posts/rails-is-omakase');

    assert.strictEqual(getPageTitle(), 'Rails is Omakase | Posts | My App');
  });

  test('the prepend=false declaration works', async function (assert) {
    await visit('/authors/tomster');

    assert.strictEqual(getPageTitle(), 'My App | Authors < Tomster');
  });

  test('replace nested in prepends work', async function (assert) {
    await visit('/hollywood');

    assert.strictEqual(getPageTitle(), 'Hollywood ★ Stars everywhere');
  });

  test('multitoken titles work', async function (assert) {
    await visit('/feeds/tomster');

    assert.strictEqual(getPageTitle(), 'Tomster (@tomster)');
  });

  test('loading substates are not shown', async function (assert) {
    await visit('/feeds/tomster');
    assert.strictEqual(getPageTitle(), 'Tomster (@tomster)');

    await click('#zoey');
    await waitUntil(() => {
      return find('div[data-test-substate-loading]') === null;
    });
    assert.strictEqual(getPageTitle(), 'Zoey (@zoey)');

    await click('#tomster');
    await waitUntil(() => {
      return find('div[data-test-substate-loading]') === null;
    });
    assert.strictEqual(getPageTitle(), 'Tomster (@tomster)');
  });

  test('front tokens work', async function (assert) {
    await visit('/reader');

    assert.strictEqual(getPageTitle(), '(10) Reader | My App');
  });

  test('does not throw if no title element exist', async function (assert) {
    document.head.querySelectorAll('title').forEach((titleElement) => {
      document.head.removeChild(titleElement);
    });
    await visit('/posts');
    assert.strictEqual(getPageTitle(), 'Posts | My App');
  });

  test('`titleDidUpdate` hook is called with the new title', async function (assert) {
    let currentTitle;

    class ExtendedPageTitleService extends PageTitleService {
      titleDidUpdate(title) {
        currentTitle = title;
      }
    }

    this.owner.register('service:page-title', ExtendedPageTitleService);

    await visit('/posts');
    assert.strictEqual(currentTitle, 'Posts | My App');

    await visit('/posts/rails-is-omakase');
    assert.strictEqual(currentTitle, 'Rails is Omakase | Posts | My App');
  });
});
