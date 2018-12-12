## {{title}} [![Ember Observer Score](http://emberobserver.com/badges/ember-page-title.svg)](http://emberobserver.com/addons/ember-page-title) [![Build Status](https://travis-ci.org/tim-evans/ember-page-title.svg)](https://travis-ci.org/tim-evans/ember-page-title) [![Code Climate](https://codeclimate.com/github/tim-evans/ember-page-title/badges/gpa.svg)](https://codeclimate.com/github/tim-evans/ember-page-title) [![Test Coverage](https://codeclimate.com/github/tim-evans/ember-page-title/badges/coverage.svg)](https://codeclimate.com/github/tim-evans/ember-page-title/coverage)

[![Greenkeeper badge](https://badges.greenkeeper.io/tim-evans/ember-page-title.svg)](https://greenkeeper.io/)

This addon provides a helper for changing the title of the page you're on.

### Installing via ember-cli

```bash
ember install ember-page-title
```

#### Post Install Cleanup

As of v3.0.0 this addon maintains the page title by using the `<title>` tag in your document's `<head>`.  This is necessary for [FastBoot](https://github.com/tildeio/ember-cli-fastboot) compatibility.

**Non-fastboot apps** should keep the `<title>` tag in index.html to ensure that the initial page is valid HTML. The title will be removed and replaced when your app boots.

**Fastboot apps** MUST remove the `<title>` tag from index.html.

### Digging in

[Visit the Docs site](https://adopted-ember-addons.github.io/ember-page-title/)

### Fastboot

When working with other addons that use `ember-cli-head`, you'll need to create a custom `head.hbs` file that exposes the `<title>` tag properly:

```hbs
<title>{{model.title}}</title>
```

This file is added automatically if you use `ember install`. This is for all the folks using ember-cli-head addons like ember-cli-meta-tags.

### API

| attribute | type    | default |
|-----------|:--------|:--------|
| separator | string  | `" \| "`|
| prepend   | boolean | true    |
| replace   | boolean | false   |

These defaults are configurable in `config/environment.js`:

```javascript
// config/environment.js
/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    pageTitle: {
      replace: true
    }
  };

  return ENV;
};
```

### upgrading notes for 3.x to 4.x
From 4.x onward, you need to have `{{head-layout}}` within your application's `application.hbs` template. Without this, you will not see a page title appear.
See [the 4.0.0 release notes](https://github.com/tim-evans/ember-page-title/releases/tag/4.0.0) for more detail.

# Contributing

Contributors are welcome! Please provide a reproducible test case. Details will be worked out on a case-per-case basis. Maintainers will get in touch when they can, so delays are possible. For contribution guidelines, see the [code of conduct](https://github.com/tim-evans/ember-plupload/blob/master/CONDUCT.md).

### Publishing Documentation

To publish documentation, run the following command:

```bash
ember github-pages:commit --message "update documentation"
git push origin gh-pages:gh-pages
```
