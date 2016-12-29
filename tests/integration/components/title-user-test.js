import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('title-user', 'Integration | Component | title user', {
  integration: true
});

test('it renders without causing failures down the line', function(assert) {
  this.render(hbs`{{title-user}}`);
  assert.equal(this.$().text().trim(), '');
});
