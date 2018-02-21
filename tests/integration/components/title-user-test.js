import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | title user', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders without causing failures down the line', async function(assert) {
    await render(hbs`{{title-user}}`);
    assert.equal(this.$().text().trim(), '');
  });
});
