import Ember from "ember";
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('document-title', 'DocumentTitleComponent');

test('appending the component sets the title of the document', function (assert) {
  assert.expect(3);

  var component = this.subject({
    title: 'Hello'
  });
  assert.equal(document.title, '');

  this.render();
  assert.equal(document.title, 'Hello');

  Ember.run(component, 'set', 'title', 'Goodbye');
  assert.equal(document.title, 'Goodbye');
});
