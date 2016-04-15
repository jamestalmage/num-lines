'use strict';
var splitLines = require('split-lines');

module.exports = function (str) {
	return splitLines(str).length;
};
