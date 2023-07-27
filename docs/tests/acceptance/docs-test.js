import { visit, fillIn } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { getPageTitle } from 'ember-page-title/test-support';

module('Acceptance: title', function (hooks) {
  setupApplicationTest(hooks);

  test('docs page renders', async function (assert) {
    await visit('/');
    assert.strictEqual(getPageTitle(), 'Ember Page Title');
  });

  test('user can modify title', async function (assert) {
    await visit('/');
    await fillIn('[data-test-edit-title]', 'New Title');
    assert.strictEqual(getPageTitle(), 'New Title');
  });
});
