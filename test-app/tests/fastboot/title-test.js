import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';
import { getPageTitle } from 'ember-page-title/test-support';

module('FastBoot: title', function (hooks) {
  setup(hooks);

  test('the default configuration works', async function (assert) {
    let { htmlDocument } = await visit('/posts');

    assert.strictEqual(getPageTitle(htmlDocument), 'Posts | My App');
  });

  test('the replace attribute works', async function (assert) {
    let { htmlDocument } = await visit('/about');

    assert.strictEqual(getPageTitle(htmlDocument), 'About My App');
  });

  test('custom separators work', async function (assert) {
    let { htmlDocument } = await visit('/about/authors');

    assert.strictEqual(getPageTitle(htmlDocument), 'Authors > About My App');
  });

  test('custom separators are inherited', async function (assert) {
    let { htmlDocument } = await visit('/about/authors/profile');

    assert.strictEqual(
      getPageTitle(htmlDocument),
      'Profile > Authors > About My App',
    );
  });

  test('rendering only single title element', async function (assert) {
    let { htmlDocument } = await visit('/fastboot/multiple/titles');

    // Since for our non-fastboot vs fastboot tests we keep original <title>
    // element in index.html, we simply filter it out.
    let numberOfTitleElements = htmlDocument.head.querySelectorAll(
      'title:not([data-test-ignore-for-fastboot-tests])',
    );

    assert.strictEqual(numberOfTitleElements.length, 1);
    assert.strictEqual(
      getPageTitle(htmlDocument),
      'Titles | Multiple | Fastboot | My App',
    );
  });

  test('multiple components in a row work', async function (assert) {
    let { htmlDocument } = await visit('/posts/rails-is-omakase');

    assert.strictEqual(
      getPageTitle(htmlDocument),
      'Rails is Omakase | Posts | My App',
    );
  });

  test('the prepend=false declaration works', async function (assert) {
    let { htmlDocument } = await visit('/authors/tomster');

    assert.strictEqual(
      getPageTitle(htmlDocument),
      'My App | Authors < Tomster',
    );
  });

  test('replace nested in prepends work', async function (assert) {
    let { htmlDocument } = await visit('/hollywood');

    assert.strictEqual(
      getPageTitle(htmlDocument),
      'Hollywood ★ Stars everywhere',
    );
  });

  test('multitoken titles work', async function (assert) {
    let { htmlDocument } = await visit('/feeds/tomster');

    assert.strictEqual(getPageTitle(htmlDocument), 'Tomster (@tomster)');
  });

  test('front tokens work', async function (assert) {
    let { htmlDocument } = await visit('/reader');

    assert.strictEqual(getPageTitle(htmlDocument), '(10) Reader | My App');
  });
});
