import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('document-title', 'DocumentTitleComponent');

test('appending the title sets the title of the document', function() {
  expect(2);

  var component = this.subject({
    title: 'Hello'
  });
  equal(document.title, '');

  this.append();
  equal(document.title, 'Hello');
});
