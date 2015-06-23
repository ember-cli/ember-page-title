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

function TransformComponentToHelper(options) {
  this.syntax = null;
  this.options = options;
}

TransformComponentToHelper.prototype.transform = function TransformComponentToHelper_transform (ast) {
  var self = this;
  var b = this.syntax.builders;
  var walker = new this.syntax.Walker();
  var moduleName = this.options.moduleName;

  walker.visit(ast, function(node) {
    if (!validate(node)) { return; }

    var moduleInfo;
    var title;
    node.path = b.path('title');

    if (node.type === 'BlockStatement') {
      moduleInfo = calculateLocationDisplay(moduleName, node.program.loc);
      if (!convertBlockToSubexpr(node, b)) {
        console.log(chalk.red(
          "Using '{{document-title}}' " + moduleInfo + "is deprecated.\n" +
          "The block form couldn't be converted to the helper form because of a complex template. Please see the documentaion for more details on how to convert this."
        ));
        return;
      }
    } else {
      moduleInfo = calculateLocationDisplay(moduleName, node.loc);
      var pair = hashPairForKey(node.hash, 'title');
      title = pair.value.original;
      if (pair.value.type === 'StringLiteral') {
        title = '"' + title + '"';
      }
      node.params.push(pair.value);

      removeFromHash(node.hash, pair);
    }

    console.log(chalk.yellow(
      "Using '{{document-title}}' " + moduleInfo + "is deprecated.\n" +
      "Please use the helper form instead (`" + nodeToString(node) + "`)."
    ));
  });

  return ast;
};

function validate(node) {
  return (node.type === 'BlockStatement' || node.type === 'MustacheStatement') &&
    node.path.original === 'document-title';
}

function convertBlockToSubexpr(node, builder) {
  var body = node.program.body;
  for (var i = 0, len = body.length; i < len; i++) {
    var part = body[i];
    switch (part.type) {
    case 'TextNode':
      part = builder.string(part.chars);
      break;
    case 'MustacheStatement':
      part.type = 'SubExpression';
      break;
    case 'BlockStatement':
      // Don't try to convert it; too much effort
      return false;
    }
    node.type = 'MustacheStatement';
    node.program = null;
    node.params.push(part);
  }

  return true;
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

function hashPairForKey(hash, key) {
  for (var i = 0, l = hash.pairs.length; i < l; i++) {
    var pair = hash.pairs[i];
    if (pair.key === key) {
      return pair;
    }
  }

  return false;
}

function removeFromHash(hash, pairToRemove) {
  var newPairs = [];
  for (var i = 0, l = hash.pairs.length; i < l; i++) {
    var pair = hash.pairs[i];

    if (pair !== pairToRemove) {
      newPairs.push(pair);
    }
  }

  hash.pairs = newPairs;
}

module.exports = TransformComponentToHelper;
