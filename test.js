'use strict';
var assert = require('assert');
var grunt = require('grunt');

it('should transpile ES6 to ES5', function () {
	assert.equal(grunt.file.read('temp.js'), 'var x = 1;\n');
});
