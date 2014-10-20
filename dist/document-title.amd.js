define("ember-document-title", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    var get = Ember.get;
    var copy = Ember.copy;
    var removeObserver = Ember.removeObserver;
    var addObserver = Ember.addObserver;

    var DocumentTitle = Ember.Mixin.create({

      titleTokensDidChange: function () {
        this.notifyPropertyChange('titleTokens');
      },

      titleTokens: function () {
        var currentHandlerInfos = get(this, 'router.currentHandlerInfos');
        var tokens = [];
        var token;

        if (currentHandlerInfos) {
          for (var i = 0, len = currentHandlerInfos.length; i < len; i++) {
            token = get(currentHandlerInfos[i], 'handler.title');
            if (token) {
              tokens.push(token);
            }
          }
        }

        return tokens;
      }.property(),

      titleDivider: '|',

      titleSpecificityIncreases: true,

      title: function () {
        var tokens = get(this, 'titleTokens'),
            divider = get(this, 'titleDivider');

        divider = ' ' + divider + ' ';

        if (!get(this, 'titleSpecificityIncreases')) {
          tokens = copy(tokens).reverse();
        }

        return tokens.join(divider);
      }.property('titleTokens', 'titleDivider', 'titleSpecificityIncreases'),

      titleDidChange: function () {
        var title = get(this, 'title');

        if (title) {
          document.title = title;
        }
      }.observes('title').on('init'),

      willTransition: function () {
        var oldInfos = get(this, 'router.currentHandlerInfos');

        if (oldInfos) {
          for (var i = 0, len = oldInfos.length; i < len; i++) {
            removeObserver(oldInfos[i].handler, 'title', this, this.titleTokensDidChange);
          }
        }
      },

      didTransition: function (infos) {
        for (var i = 0, len = infos.length; i < len; i++) {
          addObserver(infos[i].handler, 'title', this, this.titleTokensDidChange);
        }

        this.notifyPropertyChange('titleTokens');

        return this._super(infos);
      },

      _setupRouter: function (router, location) {
        var emberRouter = this;
        router.willTransition = function (infos) {
          emberRouter.willTransition(infos);
        };

        this._super(router, location);
      }
    });

    __exports__["default"] = DocumentTitle;
  });