import Ember from "ember";

var get = Ember.get;
var set = Ember.set;

var TokenList = function () {
  this.tokens = [];
  this.length = 0;
};

TokenList.prototype.push = function (token) {
  var previous = this.tokens.slice(-1)[0];
  if (previous) {
    set(token, 'previous', previous);
    set(previous, 'next', token);

    if (get(token, 'separator') == null) {
      set(token, 'separator', get(previous, 'separator'));
    }

    if (get(token, 'prepend') == null) {
      set(token, 'prepend', get(previous, 'prepend'));
    }
  }

  if (get(token, 'replace')) {
    var cursor = get(token, 'previous');
    while (cursor) {
      set(cursor, 'hidden', true);
      if (get(cursor, 'replace')) {
        break;
      }
      cursor = get(cursor, 'previous');
    }
  }

  this.tokens.push(token);
  this.length++;
};

TokenList.prototype.remove = function (token) {
  var next = get(token, 'next');
  var previous = get(token, 'previous');
  if (next) {
    set(next, 'previous', previous);
  }

  if (previous) {
    set(previous, 'next', next);
  }

  if (get(token, 'replace')) {
    var cursor = get(token, 'previous');
    while (cursor) {
      set(cursor, 'hidden', false);
      if (get(cursor, 'replace')) {
        break;
      }
      cursor = get(cursor, 'previous');
    }
  }

  set(token, 'previous', null);
  set(token, 'next', null);

  this.tokens.removeObject(token);
  this.length--;
};

export default TokenList;
