## document.title for Ember [![Build Status](https://travis-ci.org/paddle8/ember-document-title.svg)](https://travis-ci.org/paddle8/ember-document-title) [![Code Climate](https://codeclimate.com/github/paddle8/ember-document-title/badges/gpa.svg)](https://codeclimate.com/github/paddle8/ember-document-title)

This addon provides a component for changing the title of the page you're on.


### Installing via ember-cli

If inside an ember-cli project, you can install the component as an addon:

```bash
ember install:addon ember-document-title
```

### Usage

To start, let's add a root title for your application. This goes in `application.hbs`.

```handlebars
{{#document-title}}My App{{/document-title}}
```

This sets the title for your application. When your application loads, you should see the title `My App` appear. If you would like a block-less version of this component, it's available by setting the title property:

```handlebars
{{document-title title="My App"}}
```

By default, using the component will allow an interaction where additional titles are appended to the root:
![Defaults](public/default.jpg)

You can change the separator (at *any* level) by setting the `separator` attribute:
![Custom Separator](public/separator.jpg)

Titles can be prepended to the parent, by setting the `prepend` attribute to `true`.
![Prepend](public/prepend.jpg)

This allows one to swap the order at arbitrary levels:
![Nested Prepend](public/prepend-nested.jpg)

And for special templates that need to complete control over the title, set the `replace` attribute to `true`. This will only apply for that level.
![Replace](public/replace.jpg)

### API

