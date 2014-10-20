## document.title for Ember

This mixin provides support for document.title use in the router. This is an extraction of a PR from ember (https://github.com/emberjs/ember.js/pull/3689).

### Installing

If inside an ember-cli project, you can install the mixin as an addon and skip all other setup involved.

```bash
npm install --save-dev ember-document-title
```

Otherwise, install the mixin using bower:

```bash
bower install --save paddle8/ember-document-title
```

In your Brocfile.js, add the following line:

```javascript
app.import("bower_components/ember-document-title/dist/document-title.amd.js", {
  exports: {
    'ember-document-title': ['default']
  }
});
```

In router.js, import the mixin and provide it onto the Router object:

```javascript
import Ember from "ember";
import DocumentTitle from "ember-document-title";
import config from "./config/environment";

var Router = Ember.Router.extend(DocumentTitle, {
  location: config.locationType
});
```

### Usage

In your routes, you can now use the `title` property to bind to the title of the page:

```javascript
import Ember from "ember";

var reads = Ember.computed.reads;
var get = Ember.get;

var Index = Ember.Route.extend({
  title: reads("controller.fullName"),

  model: function () {
    return Ember.Object.extend({
      fullName: function () {
        return get(this, 'firstName') + ' ' + get(this, 'lastName');
      }.property('firstName', 'lastName')
    }).create({
      firstName: "Tomster",
      lastName: "the Hamster"
    });
  }
});

export default Index;
```
