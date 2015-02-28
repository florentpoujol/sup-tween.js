// We will unit test both the original library and the minified version
var SPTWEEN_uncompressed = require('../../src/sp-tweenjs.js');
// var TWEEN_min = require('../../build/tween.min.js');
var getTests = require('./tests');

module.exports = {
	'tween': getTests(SPTWEEN_uncompressed),
	// 'tween_min': getTests(TWEEN_min)
};

