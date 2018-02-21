import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import TokenList from "ember-page-title/services/page-title-list";

module('service:page-title-list', function(hooks) {
  setupTest(hooks);

  test('the list has no tokens by default', function (assert) {
    assert.equal(this.owner.lookup('service:page-title-list').length, 0);
  });

  test('calling `push` adds a token to the end of the list', function (assert) {
    let list = this.owner.lookup('service:page-title-list');
    list.push({ id: 1});
    assert.equal(list.length, 1);
  });

  test('tokens have next and previous tokens', function (assert) {
    let list = this.owner.lookup('service:page-title-list');
    let first = { id: 1 };
    let second = { id: 2 };
    let third = { id: 3 };

    list.push(first);
    list.push(second);
    list.push(third);

    assert.equal(list.length, 3);

    assert.equal(first.previous, null);
    assert.equal(first.next, second);

    assert.equal(second.previous, first);
    assert.equal(second.next, third);

    assert.equal(third.previous, second);
    assert.equal(third.next, null);
  });

  test('removing a token closes the hole in the list', function (assert) {
    let list = this.owner.lookup('service:page-title-list');
    let first = { id: 1 };
    let second = { id: 2 };
    let third = { id: 3 };

    list.push(first);
    list.push(second);
    list.push(third);
    list.remove(2);
    assert.equal(list.length, 2);

    assert.equal(first.previous, null);
    assert.equal(first.next, third);

    assert.equal(second.previous, null);
    assert.equal(second.next, null);

    assert.equal(third.previous, first);
    assert.equal(third.next, null);
  });

  test('the separator property is inherited by the previous token', function (assert) {
    let list = this.owner.lookup('service:page-title-list');
    let first = { id: 1, separator: 'a' };
    let second = { id: 2 };

    list.push(first);
    list.push(second);

    assert.equal(first.separator, 'a');
    assert.equal(second.separator, 'a');
  });

  test('the separator property is not inherited if explicitly set', function (assert) {
    let list = this.owner.lookup('service:page-title-list');
    let first = { id: 1, separator: 'a' };
    let second = { id: 2, separator: 'b' };

    list.push(first);
    list.push(second);

    assert.equal(first.separator, 'a');
    assert.equal(second.separator, 'b');
  });

  test('the prepend property is inherited by the previous token', function (assert) {
    let list = this.owner.lookup('service:page-title-list');
    let first = { id: 1, prepend: true };
    let second = { id: 2 };

    list.push(first);
    list.push(second);

    assert.ok(first.prepend);
    assert.ok(second.prepend);
  });

  test('the prepend property is not inherited if explicitly set', function (assert) {
    let list = this.owner.lookup('service:page-title-list');
    let first = { id: 1, prepend: true };
    let second = { id: 2, prepend: false };

    list.push(first);
    list.push(second);

    assert.ok(first.prepend);
    assert.ok(!second.prepend);
  });

  test('if the replace attribute is set, all previous tokens are hidden', function (assert) {
    let list = this.owner.lookup('service:page-title-list');
    let first = { id: 1 };
    let second = { id: 2 };
    let third = { id: 3, replace: true };

    list.push(first);
    list.push(second);
    list.push(third);

    let tokens = list.get('sortedTokens');
    assert.equal(tokens.length, 1);
    assert.equal(tokens[0].id, 3);
  });

  test('any additional tokens added after replace are not hidden', function (assert) {
    let list = this.owner.lookup('service:page-title-list');
    let first = { id: 1 };
    let second = { id: 2, replace: true };
    let third = { id: 3 };

    list.push(first);
    list.push(second);
    list.push(third);

    let tokens = list.get('sortedTokens');
    assert.equal(tokens.length, 2);
    assert.equal(tokens[0].id, 2);
    assert.equal(tokens[1].id, 3);
  });

  test('removing a token with replace: true will set all previous tokens to be visible', function (assert) {
    let list = this.owner.lookup('service:page-title-list');
    let first = { id: 1 };
    let second = { id: 2, replace: true };
    let third = { id: 3 };

    list.push(first);
    list.push(second);
    list.push(third);
    list.remove(2);

    let tokens = list.get('sortedTokens');
    assert.equal(tokens.length, 2);
    assert.equal(tokens[0].id, 1);
    assert.equal(tokens[1].id, 3);
  });

  test('removing a token with replace: true will only set previous tokens up to the last replace: true to visible', function (assert) {
    let list = this.owner.lookup('service:page-title-list');
    let first = { id: 1 };
    let second = { id: 2, replace: true };
    let third = { id: 3, replace: true };

    list.push(first);
    list.push(second);
    list.push(third);
    list.remove(3);

    let tokens = list.get('sortedTokens');
    assert.equal(tokens.length, 1);
    assert.equal(tokens[0].id, 2);
  });

  test("null tokens aren't displayed as a string", function (assert) {
    let list = this.owner.lookup('service:page-title-list');
    let first = { id: 1, title: '1' };
    let second = { id: 2, title: null };
    let third = { id: 3, title: '3' };

    list.push(first);
    list.push(second);
    list.push(third);

    assert.equal(list.toString(), '1 | 3');
  });
});