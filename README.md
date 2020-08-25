## {{page-title}} [![Ember Observer Score](http://emberobserver.com/badges/ember-page-title.svg)](http://emberobserver.com/addons/ember-page-title) [![Build Status](https://travis-ci.org/adopted-ember-addons/ember-page-title.svg)](https://travis-ci.org/adopted-ember-addons/ember-page-title)

This addon provides a helper for changing the title of the page you're on.

### Installing via ember-cli

```bash
ember install ember-page-title
```

Add `{{head-layout}}` to your application's `application.hbs` template.

<details>
<summary>Fastboot vs Non-Fastboot Notes</summary>

### Compatibility

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

#### Post Install Cleanup

As of v3.0.0 this addon maintains the page title by using the `<title>` tag in your document's `<head>`. This is necessary for [FastBoot](https://github.com/tildeio/ember-cli-fastboot) compatibility.

**Non-fastboot apps** should keep the `<title>` tag in index.html to ensure that the initial page is valid HTML. The title will be removed and replaced when your app boots.

**Fastboot apps** MUST remove the `<title>` tag from index.html.

</details>

### Digging in

[Visit the Docs site](https://adopted-ember-addons.github.io/ember-page-title/)

### API

#### `{{page-title}}` Helper

| attribute | type    | default  | description                                                                   |
| --------- | :------ | :------- | :---------------------------------------------------------------------------- |
| separator | string  | `" \| "` | Which separator should be displayed _after_ this instance of `{{page-title}}` |
| prepend   | boolean | true     | If the token should be prepended or appended to the list of tokens            |
| replace   | boolean | false    | Replace all previous elements with the active                                 |
| front     | boolean | false    | If the token should always be in the beginning of the resulting title.        |

These defaults are configurable in `config/environment.js`:

```javascript
// config/environment.js

module.exports = function (environment) {
  let ENV = {
    pageTitle: {
      replace: true,
    },
  };

  return ENV;
};
```

### Fastboot

When working with other addons that use `ember-cli-head`, you'll need to create a custom `head.hbs` file that exposes the `<title>` tag properly:

```hbs
<title>{{model.title}}</title>
```

This file is added automatically if you use `ember install`. This is for all the folks using ember-cli-head addons like ember-cli-meta-tags.

### Deprecations

- Since **v5.2.2**: The `{{title}}` helper has been deprecated, use `{{page-title}}` instead, it has the same API. The
  `{{title}}` helper was an AST transform and will be removed in the next major release.

### Upgrading notes for 3.x to 4.x

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
