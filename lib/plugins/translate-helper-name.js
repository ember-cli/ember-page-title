function TranslateHelperName(options) {
  this.syntax = null;
  this.options = options;
}

TranslateHelperName.prototype.transform = function TranslateHelperName_transform (ast) {
  var self = this;
  var b = this.syntax.builders;
  var walker = new this.syntax.Walker();
  var moduleName = this.options.moduleName;

  walker.visit(ast, function(node) {
    if (!validate(node)) { return; }
    node.path = b.path('page-title');
  });

  return ast;
};

function validate(node) {
  return node.type === 'MustacheStatement' &&
    node.path.original === 'title' &&
    node.params.length > 0;
}

module.exports = TranslateHelperName;
