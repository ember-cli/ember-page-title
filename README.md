## document.title for Ember

This addon provides a component for changing the title of the page you're on.


### Installing via ember-cli

If inside an ember-cli project, you can install the mixin as an addon in a single command:

```bash
npm install --save-dev ember-document-title
```

And you're done! No need to continue!! :)

### Usage

To start, let's add a root title for your application. This goes in `application.hbs`.

```handlebars
<document-title>My App</document-title>
```

This sets the title for your application. When your application loads, you should see the title `My App` appear. If you would like a block-less version of this component, it's available by setting the title property:

```handlebars
<document-title title="My App">
```

![Defaults](public/default.jpg)
![Custom Separator](public/separator.jpg)
![Prepend](public/prepend.jpg)
![Nested Prepend](public/prepend-nested.jpg)
![Replace](public/replace.jpg)

### API

