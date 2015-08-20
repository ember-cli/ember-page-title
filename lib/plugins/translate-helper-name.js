var chalk = require('chalk');

function calculateLocationDisplay(moduleName, _loc) {
  var loc = _loc || {};
  var origin = loc.start || {};
  var column = origin.column;
  var line = origin.line;
  var moduleInfo = '';
  if (moduleName) {
    moduleInfo +=  "'" + moduleName + "' ";
  }

  if (line !== undefined && column !== undefined) {
    if (moduleName) {
      // only prepend @ if the moduleName was present
      moduleInfo += '@ ';
    }
    moduleInfo += 'L' + line + ':C' + column;
  }

  if (moduleInfo) {
    moduleInfo = '(' + moduleInfo + ') ';
  }

  return moduleInfo;
}

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

function stringifyParams(node) {
  var string = [];
  string.push(node.path.original);

  for (var i = 0, l = node.params.length; i < l; i++) {
    string.push(nodeToString(node.params[i]));
  }

  for (i = 0, l = node.hash.pairs.length; i < l; i++) {
    var pair = node.hash.pairs[i];
    string.push(pair.key + '=' + nodeToString(pair.value));
  }

  return string.join(' ');
}

function nodeToString(node) {
  switch (node.type) {
  case 'StringLiteral':
    return '"' + node.value + '"';
  case 'SubExpression':
    if (node.path.original === '@mut') {
      return nodeToString(node.params[0]);
    } else if (node.path.type === 'PathExpression' &&
               node.hash.pairs.length === 0 &&
               node.params.length == 0) {
      return nodeToString(node.path);
    } else {
      return '(' + stringifyParams(node) + ')';
    }
  case 'MustacheStatement':
    return '{{' + stringifyParams(node) + '}}';
  default:
    return node.original;
  }
}

module.exports = TranslateHelperName;
