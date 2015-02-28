// We will unit test both the original library and the minified version
var SPTWEEN_uncompressed = require('../../src/sp-tween.js');
var SPTWEEN_min = require('../../build/sp-tween.min.js');
var getTests = require('./tests');

module.exports = {
	'tween': getTests(SPTWEEN_uncompressed),
	'tween_min': getTests(SPTWEEN_min)
};

