## ember-page-title [![Ember Observer Score](https://emberobserver.com/badges/ember-page-title.svg)](https://emberobserver.com/addons/ember-page-title) ![CI](https://github.com/ember-cli/ember-page-title/workflows/CI/badge.svg)

This addon provides a helper for changing the title of the page you're on.

### Installing via ember-cli

```bash
ember install ember-page-title
```

### Compatibility

- `ember-source` v4.2 or above

<details>
<summary>Fastboot vs Non-Fastboot Notes</summary>

#### Post Install Setup Notes

As of v3.0.0 this addon maintains the page title by using the `<title>` tag in your document's `<head>`. This is necessary for [FastBoot](https://github.com/tildeio/ember-cli-fastboot) compatibility.

**Non-fastboot apps** should keep the `<title>` tag in index.html to ensure that the initial page is valid HTML. The title will be removed and replaced when your app boots.

**Fastboot apps** MUST remove the `<title>` tag from index.html. As of v6.0.0 this is done automatically if you use `ember install ember-page-title` to install this addon. Can also be run manually using `ember g ember-page-title` to update the title if FastBoot is installed.

</details>

### Digging in

[Visit the Docs site](https://ember-cli.github.io/ember-page-title/)

### API

#### `{{page-title}}` Helper

| attribute | type    | default  | description                                                                   |
| --------- | :------ | :------- | :---------------------------------------------------------------------------- |
| separator | string  | `" \| "` | Which separator should be displayed _after_ this instance of `{{page-title}}` |
| prepend   | boolean | true     | If the token should be prepended or appended to the list of tokens            |
| replace   | boolean | false    | Replace all previous elements with the active                                 |
| front     | boolean | false    | If the token should always be in the beginning of the resulting title.        |

The default values for `separator`, `prepend` and `replace` are configurable via `config/environment.js`:

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

For usage in `gts` and `gjs`, the `pageTitle` helper is exported from the index:

```gjs
import { pageTitle } from 'ember-page-title';

<template>
  {{pageTitle "About"}}
  
  ...
</template>
```

### `page-title` Service

If you want to be notified when the page title has been updated, you can extend and override the `page-title` service and provide your own `titleDidUpdate` hook. The `titleDidUpdate` hook receives the new title as its sole argument.

```javascript
// app/services/page-title.js

import EmberPageTitleService from 'ember-page-title/services/page-title';

export default class PageTitleService extends EmberPageTitleService {
  titleDidUpdate(title) {
    // Do something with the new title.
  }
}
```

### Testing

`assert` the page `title` with the supplied `getPageTitle` test helper:

```javascript
import { getPageTitle } from 'ember-page-title/test-support';

module('Acceptance | Register Page', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /register', async function (assert) {
    const registerURL = '/register';
    await visit(registerURL);

    assert.equal(currentURL(), registerURL);
    assert.equal(getPageTitle(), 'Register | Some Website');
  });
});
```

### TypeScript and Glint

If your project uses loose-mode templates, you can merge in the template registry interface provided by ember-page-title, 
```ts
// <your-app>/types/glint.d.ts
import '@glint/environment-ember-loose';
import '@glint/environment-ember-template-imports';

import type PageTitle from 'ember-page-title/template-registry';

declare module '@glint/environment-ember-loose/registry' {
	export default interface Registry extends PageTitle {
        /* your local loose-mode entries here */
	}
}
```

Similarly, if you rely on a service registry, you'll want to import ember-page-title's service registry and extend from it.

```ts
import type PageTitle from 'ember-page-title/service-registry';

declare module '@ember/service' {
  interface Registry extends PageTitle {
        /* your local service entries here */
  }
}
```

or, if you wish to manage how the service becomes registered yourself, you may import the service:
```ts
import type PageTitle from 'ember-page-title/services/page-title';
```

### Upgrading notes for 5.x to 6.x

- `ember-page-title` no longer requires the usage of `ember-cli-head`.
  Please remove `{{head-layout}}` from your application's `application.hbs` route template.
- `{{title}}` has been removed, please rename to `{{page-title}}`.

# Contributing

Contributors are welcome! Please provide a reproducible test case. Details will be worked out on a case-per-case basis. Maintainers will get in touch when they can, so delays are possible. For contribution guidelines, see the [code of conduct](https://github.com/ember-cli/ember-page-title/blob/master/CODE_OF_CONDUCT.md).

### Publishing Documentation

To publish documentation, run the following command:

```bash
ember github-pages:commit --message "update documentation"
git push origin gh-pages:gh-pages
```
