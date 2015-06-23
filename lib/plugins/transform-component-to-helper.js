var chalk = require('chalk');

function calculateLocationDisplay(moduleName, _loc) {
  var loc = _loc || {};
  var origin = loc.start || {};
  var column = origin.start;
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
  var b = this.syntax.builders;
  var walker = new this.syntax.Walker();
  var moduleName = this.options.moduleName;

  walker.visit(ast, function(node) {
    if (!validate(node)) { return; }

    var moduleInfo;
    var title;
    if (node.type === 'BlockStatement') {
      moduleInfo = calculateLocationDisplay(moduleName, node.program.loc);
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

    node.path = b.path('title');

    console.log(chalk.yellow(
      "Using '{{document-title}}' " + moduleInfo + "is deprecated.\n" +
      "Please use the helper form instead ('{{title " + title + " ...}}')."
    ));
  });

  return ast;
};

function validate(node) {
  return (node.type === 'BlockStatement' || node.type === 'MustacheStatement') &&
    node.path.original === 'document-title';
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
