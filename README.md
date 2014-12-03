## document.title for Ember

This mixin provides support for document.title use in the router. This is an extraction of a PR from ember (https://github.com/emberjs/ember.js/pull/3689).

### Installing via ember-cli

If inside an ember-cli project, you can install the mixin as an addon in a single command:

```bash
npm install --save-dev ember-document-title
```

And you're done! No need to continue!! :)

### Installing via bower

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

This sets the title for a single specific page. If you set titles for pages within a routing hierarchy, the titles will be combined up the hierarchy, in descending order separated by a '|', by default. For example:

```javascript
Router.map(function() {
  this.resource('post', { path: '/post/:post_id' }, function() {
    this.route('edit');
  });
});

App.ApplicationRoute = Ember.Route.extend({
  title: "App"
});

App.PostRoute = Ember.Route.extend({
  title: "Post"
});

App.PostEditRoute = Ember.Route.extend({
  title: "Edit"
});
```

Here, the title of all pages in the application is `App`, by default. The /post page then has a specific title of `App | Post`, and the /post/edit page has a title of `App | Post | Edit`. Routes in the hierarchy without a title property are ignored; if the post route had no title in the above example, the edit page's title would be `App | Edit`.
