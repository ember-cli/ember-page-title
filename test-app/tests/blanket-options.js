/* globals blanket, module */

var options = {
  modulePrefix: 'ember-page-title',
  filter: '//.*ember-page-title/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['lcov'],
    autostart: true,
  },
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
