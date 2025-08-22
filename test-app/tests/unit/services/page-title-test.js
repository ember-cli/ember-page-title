import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('service:page-title', function (hooks) {
  setupTest(hooks);

  test('the list has no tokens by default', function (assert) {
    assert.strictEqual(
      this.owner.lookup('service:page-title').tokens.length,
      0,
    );
  });

  test('calling `push` adds a token to the end of the list', function (assert) {
    let list = this.owner.lookup('service:page-title');
    list.push({ id: 1 });
    assert.strictEqual(list.tokens.length, 1);
  });

  test('tokens have next and previous tokens', function (assert) {
    let list = this.owner.lookup('service:page-title');
    let first = { id: 1 };
    let second = { id: 2 };
    let third = { id: 3 };

    list.push(first);
    list.push(second);
    list.push(third);

    assert.strictEqual(list.tokens.length, 3);

    assert.strictEqual(first.previous, null);
    assert.strictEqual(first.next, second);

    assert.strictEqual(second.previous, first);
    assert.strictEqual(second.next, third);

    assert.strictEqual(third.previous, second);
    assert.strictEqual(third.next, null);
  });

  test('removing a token closes the hole in the list', function (assert) {
    let list = this.owner.lookup('service:page-title');
    let first = { id: 1 };
    let second = { id: 2 };
    let third = { id: 3 };

    list.push(first);
    list.push(second);
    list.push(third);
    list.remove(2);
    assert.strictEqual(list.tokens.length, 2);

    assert.strictEqual(first.previous, null);
    assert.strictEqual(first.next, third);

    assert.strictEqual(second.previous, null);
    assert.strictEqual(second.next, null);

    assert.strictEqual(third.previous, first);
    assert.strictEqual(third.next, null);
  });

  test('the separator property is inherited by the previous token', function (assert) {
    let list = this.owner.lookup('service:page-title');
    let first = { id: 1, separator: 'a' };
    let second = { id: 2 };

    list.push(first);
    list.push(second);

    let tokens = list.get('sortedTokens');
    assert.strictEqual(tokens[0].separator, 'a');
    assert.strictEqual(tokens[1].separator, 'a');
  });

  test('the separator property is not inherited if explicitly set', function (assert) {
    let list = this.owner.lookup('service:page-title');
    let first = { id: 1, separator: 'a' };
    let second = { id: 2, separator: 'b' };

    list.push(first);
    list.push(second);

    let tokens = list.get('sortedTokens');
    assert.strictEqual(tokens[0].separator, 'b');
    assert.strictEqual(tokens[1].separator, 'a');
  });

  test('the prepend property is inherited by the previous token', function (assert) {
    let list = this.owner.lookup('service:page-title');
    let first = { id: 1, prepend: true };
    let second = { id: 2 };

    list.push(first);
    list.push(second);

    assert.ok(first.prepend);
    assert.ok(second.prepend);
  });

  test('the prepend property is not inherited if explicitly set', function (assert) {
    let list = this.owner.lookup('service:page-title');
    let first = { id: 1, prepend: true };
    let second = { id: 2, prepend: false };

    list.push(first);
    list.push(second);

    assert.ok(first.prepend);
    assert.notOk(second.prepend);
  });

  test('if the replace attribute is set, all previous tokens are hidden', function (assert) {
    let list = this.owner.lookup('service:page-title');
    let first = { id: 1 };
    let second = { id: 2 };
    let third = { id: 3, replace: true };

    list.push(first);
    list.push(second);
    list.push(third);

    let tokens = list.get('sortedTokens');
    assert.strictEqual(tokens.length, 1);
    assert.strictEqual(tokens[0].id, 3);
  });

  test('any additional tokens added after replace are not hidden', function (assert) {
    let list = this.owner.lookup('service:page-title');
    let first = { id: 1 };
    let second = { id: 2, replace: true };
    let third = { id: 3 };

    list.push(first);
    list.push(second);
    list.push(third);

    let tokens = list.get('sortedTokens');
    assert.strictEqual(tokens.length, 2);
    assert.strictEqual(tokens[0].id, 3);
    assert.strictEqual(tokens[1].id, 2);
  });

  test('removing a token with replace: true will set all previous tokens to be visible', function (assert) {
    let list = this.owner.lookup('service:page-title');
    let first = { id: 1 };
    let second = { id: 2, replace: true };
    let third = { id: 3 };

    list.push(first);
    list.push(second);
    list.push(third);
    list.remove(2);

    let tokens = list.get('sortedTokens');
    assert.strictEqual(tokens.length, 2);
    assert.strictEqual(tokens[0].id, 3);
    assert.strictEqual(tokens[1].id, 1);
  });

  test('removing a token with replace: true will only set previous tokens up to the last replace: true to visible', function (assert) {
    let list = this.owner.lookup('service:page-title');
    let first = { id: 1 };
    let second = { id: 2, replace: true };
    let third = { id: 3, replace: true };

    list.push(first);
    list.push(second);
    list.push(third);
    list.remove(3);

    let tokens = list.get('sortedTokens');
    assert.strictEqual(tokens.length, 1);
    assert.strictEqual(tokens[0].id, 2);
  });

  test("null tokens aren't displayed as a string", function (assert) {
    let list = this.owner.lookup('service:page-title');
    let first = { id: 1, title: '1' };
    let second = { id: 2, title: null };
    let third = { id: 3, title: '3' };

    list.push(first);
    list.push(second);
    list.push(third);

    assert.strictEqual(list.toString(), '3 | 1');
  });

  test('initial page-title defaults', function (assert) {
    let list = this.owner.lookup('service:page-title');

    assert.strictEqual(list._defaultConfig.separator, ' | ');
    assert.true(list._defaultConfig.prepend);
    assert.strictEqual(list._defaultConfig.replace, null);
  });

  test('can change defaults from config', function (assert) {
    this.owner.register('config:environment', {
      pageTitle: {
        separator: ' & ',
        prepend: false,
        replace: true,
      },
    });

    let list = this.owner.lookup('service:page-title');

    assert.strictEqual(list._defaultConfig.separator, ' & ');
    assert.false(list._defaultConfig.prepend);
    assert.true(list._defaultConfig.replace);
  });

  test('undefined config entries do not change defaults', function (assert) {
    this.owner.register('config:environment', {
      pageTitle: {
        separator: undefined,
        prepend: null,
        replace: undefined,
      },
    });

    let list = this.owner.lookup('service:page-title');

    assert.strictEqual(list._defaultConfig.separator, ' | ');
    assert.true(list._defaultConfig.prepend);
    assert.strictEqual(list._defaultConfig.replace, null);
  });

  test('separator config option can be a whitespace string', function (assert) {
    this.owner.register('config:environment', {
      pageTitle: {
        separator: ' ',
      },
    });

    let list = this.owner.lookup('service:page-title');

    assert.strictEqual(list._defaultConfig.separator, ' ');
  });
});
