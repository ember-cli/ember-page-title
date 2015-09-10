## {{title}} [![Ember Observer Score](http://emberobserver.com/badges/ember-page-title.svg)](http://emberobserver.com/addons/ember-page-title) [![Build Status](https://travis-ci.org/tim-evans/ember-page-title.svg)](https://travis-ci.org/tim-evans/ember-page-title) [![Code Climate](https://codeclimate.com/github/tim-evans/ember-page-title/badges/gpa.svg)](https://codeclimate.com/github/tim-evans/ember-page-title)

This addon provides a helper for changing the title of the page you're on.

### Installing via ember-cli

`ember-page-title` follows the release format provided in [The Ember 2.x Project](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html). For support of Ember versions below 1.13, please use `1.1.11` (named as `ember-document-title`):

```bash
ember install ember-document-title@1.1.11
```

For any other app, follow the scheme outlined in the blog post. Previous versions of the addon may work with newer versions of Ember, but that **is not guaranteed**-- YMMV. If you're on the latest stable release of Ember, you may install the addon without a version number.

```bash
ember install ember-page-title
```

### Digging in

[Visit the Docs site](http://tim-evans.github.io/ember-page-title/)

### API

| attribute | type    | default |
|-----------|:--------|:--------|
| separator | string  | `" | "` |
| prepend   | boolean | false   |
| replace   | boolean | false   |

The default value for the separator can be overridden by extending the service that stores the list of titles:

```javascript
// app/services/page-title-list.js
import PageTitleList from 'ember-page-title/services/page-title-list';

export default PageTitleList.extend({
  defaultSeparator: ' > '
});
```

### Publishing Documentation

To publish documentation (under the tests/dummy directory) run the following command:

```bash
npm run-script publish-docs
```
