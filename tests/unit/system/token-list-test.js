/* global QUnit */
import Ember from "ember";
import TokenList from "ember-document-title/system/token-list";
import {
  test
} from 'ember-qunit';

const run = Ember.run;

QUnit.module('TokenList');

test('the list has no tokens by default', function (assert) {
  let list = new TokenList();
  assert.equal(list.length, 0);
});

test('calling `push` adds a token to the end of the list', function (assert) {
  let list = new TokenList();
  list.push({});
  assert.equal(list.length, 1);
});

test('tokens have next and previous tokens', function (assert) {
  let list = new TokenList();
  let first = {};
  let second = {};
  let third = {};

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
  let list = new TokenList();
  let first = {};
  let second = {};
  let third = {};

  list.push(first);
  list.push(second);
  list.push(third);
  list.remove(second);
  assert.equal(list.length, 2);

  assert.equal(first.previous, null);
  assert.equal(first.next, third);

  assert.equal(second.previous, null);
  assert.equal(second.next, null);

  assert.equal(third.previous, first);
  assert.equal(third.next, null);
});

test('the separator property is inherited by the previous token', function (assert) {
  let list = new TokenList();
  let first = { separator: 'a' };
  let second = {};

  list.push(first);
  list.push(second);

  assert.equal(first.separator, 'a');
  assert.equal(second.separator, 'a');
});

test('the separator property is not inherited if explicitly set', function (assert) {
  let list = new TokenList();
  let first = { separator: 'a' };
  let second = { separator: 'b' };

  list.push(first);
  list.push(second);

  assert.equal(first.separator, 'a');
  assert.equal(second.separator, 'b');
});

test('the prepend property is inherited by the previous token', function (assert) {
  let list = new TokenList();
  let first = { prepend: true };
  let second = {};

  list.push(first);
  list.push(second);

  assert.ok(first.prepend);
  assert.ok(second.prepend);
});

test('the prepend property is not inherited if explicitly set', function (assert) {
  let list = new TokenList();
  let first = { prepend: true };
  let second = { prepend: false };

  list.push(first);
  list.push(second);

  assert.ok(first.prepend);
  assert.ok(!second.prepend);
});

test('if the replace attribute is set, all previous tokens are hidden', function (assert) {
  let list = new TokenList();
  let first = {};
  let second = {};
  let third = { replace: true };

  list.push(first);
  list.push(second);

  assert.ok(!first.hidden);
  assert.ok(!second.hidden);

  list.push(third);
  assert.ok(first.hidden);
  assert.ok(second.hidden);
  assert.ok(!third.hidden);
});

test('any additional tokens added after replace are not hidden', function (assert) {
  let list = new TokenList();
  let first = {};
  let second = { replace: true };
  let third = {};

  list.push(first);
  list.push(second);
  list.push(third);
  assert.ok(first.hidden);
  assert.ok(!second.hidden);
  assert.ok(!third.hidden);
});

test('removing a token with replace: true will set all hidden tokens visible', function (assert) {
  let list = new TokenList();
  let first = {};
  let second = { replace: true };
  let third = {};

  list.push(first);
  list.push(second);
  list.push(third);
  list.remove(second);

  assert.ok(!first.hidden);
  assert.ok(!third.hidden);
});
