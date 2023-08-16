'use strict';

const browsers = [
  'last 1 Chrome versions',
  'last 1 Firefox versions',
  'last 1 Safari versions',
];

module.exports = {
  browsers,
  node: 'current', // This is here to avoid "SyntaxError: Unexpected token '.'" from fastboot ember-app.js
};
