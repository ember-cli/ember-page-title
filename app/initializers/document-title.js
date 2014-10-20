import DocumentTitle from "ember-document-title/mixins/document-title";
import Router from "../router";

Router.reopen(DocumentTitle);

export default {
  name: "document-title",
  initialize: function () {}
};
