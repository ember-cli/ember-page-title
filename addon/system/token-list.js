import Ember from "ember";

var get = Ember.get;
var set = Ember.set;

var backtrackFrom = function (start, func) {
  var cursor = get(start, 'previous');
  while (cursor) {
    var result = func(cursor);
    if (result === false) {
      break;
    }
    cursor = get(cursor, 'previous');
  }
};

var TokenList = function () {
  this.tokens = Ember.A([]);
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
    backtrackFrom(token, function (token) {
      set(token, 'hidden', true);
      return !get(token, 'replace');
    });
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
    backtrackFrom(token, function (token) {
      set(token, 'hidden', false);
      return !get(token, 'replace');
    });
  }

  set(token, 'previous', null);
  set(token, 'next', null);

  this.tokens.removeObject(token);
  this.length--;
};

export default TokenList;
