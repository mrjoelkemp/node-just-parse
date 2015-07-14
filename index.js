var acorn = require('acorn');
var acornLoose = require('acorn/dist/acorn_loose');

/**
 * Parse with strict mode then with loose mode as a fallback
 *
 * @param  {String}  content
 * @return {Object}  ast
 */
module.exports = function(content) {
  var ast;
  var parserOptions = module.exports._getParserOptions();

  // Returns an object if ok, if not, returns an empty array
  try {
    ast = acorn.parse(content, parserOptions);

  } catch (err) {
    ast = acornLoose.parse_dammit(content, parserOptions);
  }

  return ast;
};

/**
 * Exposed for testing
 * @return {Object}
 */
module.exports._getParserOptions = function() {
  return {
    ecmaVersion: 6
  };
};
