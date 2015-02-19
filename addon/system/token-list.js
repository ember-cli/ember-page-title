import Ember from "ember";

const get = Ember.get;
const set = Ember.set;

let TokenList = function () {
  this.tokens = [];
  this.length = 0;
};

TokenList.prototype.push = function (token) {
  let previous = this.tokens.slice(-1)[0];
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
    this.tokens.setEach('hidden', true);
  }

  this.tokens.push(token);
  this.length++;
};

TokenList.prototype.remove = function (token) {
  let next = get(token, 'next');
  let previous = get(token, 'previous');
  if (next) {
    set(next, 'previous', previous);
  }

  if (previous) {
    set(previous, 'next', next);
  }

  if (get(token, 'replace')) {
    this.tokens.setEach('hidden', false);
  }

  set(token, 'previous', null);
  set(token, 'next', null);

  this.tokens.removeObject(token);
  this.length--;
};

export default TokenList;
