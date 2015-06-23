## {{title}} [![Ember Observer Score](http://emberobserver.com/badges/ember-document-title.svg)](http://emberobserver.com/addons/ember-document-title) [![Build Status](https://travis-ci.org/paddle8/ember-document-title.svg)](https://travis-ci.org/paddle8/ember-document-title) [![Code Climate](https://codeclimate.com/github/paddle8/ember-document-title/badges/gpa.svg)](https://codeclimate.com/github/paddle8/ember-document-title)

This addon provides a helper for changing the title of the page you're on.

### Installing via ember-cli

If inside an ember-cli project, you can install the helper as an addon:

```bash
ember install ember-document-title
```

### Usage

To start, let's add a root title for your application. This goes in `application.hbs`.

```handlebars
{{title "My App"}}
```

This sets the title for your application. When your application loads, you should see the title `My App` appear.

By default, using the helper will allow an interaction where additional titles are appended to the root:

![Defaults](public/default.jpg)

You can change the separator by specifying the `separator` attribute.

![Custom Separator](public/separator.jpg)

Separators can be changed at arbitrary levels:

![Custom Separator](public/separator-nested.jpg)

Titles can be prepended to the parent, by setting the `prepend` attribute to `true`.

![Prepend](public/prepend.jpg)

This allows one to swap the order at arbitrary levels:

![Nested Prepend](public/prepend-nested.jpg)

And for special templates that need to complete control over the title, set the `replace` attribute to `true`. This will only apply for that level.

![Replace](public/replace.jpg)

In addition, there's no limit to the amount of titles you can put in a route:

![Replace](public/duplicate.jpg)

Dynamic tokens are available by providing multiple parameters to the helper:

![Replace](public/dynamic.jpg)

### API

| attribute | type    | default |
|-----------|:--------|:--------|
| separator | string  | `" | "` |
| prepend   | boolean | false   |
| replace   | boolean | false   |
