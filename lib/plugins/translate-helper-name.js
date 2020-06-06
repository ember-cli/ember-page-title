function TranslateHelperName(options) {
  this.syntax = null;
  this.options = options;
}

TranslateHelperName.prototype.transform = function TranslateHelperName_transform(
  ast
) {
  var b = this.syntax.builders;
  var walker = new this.syntax.Walker();

  walker.visit(ast, function (node) {
    if (!validate(node)) {
      return;
    }
    node.path = b.path('page-title');
    node.hash.pairs.push(b.pair('_deprecate', b.string(node.loc.source)));
  });

  return ast;
};

function validate(node) {
  return (
    node.type === 'MustacheStatement' &&
    node.path.original === 'title' &&
    node.params.length > 0
  );
}

module.exports = TranslateHelperName;
