'use strict';
var eachAsync = require('each-async');
var chalk = require('chalk');
var es6transpiler = require('es6-transpiler');

module.exports = function (grunt) {
	grunt.registerMultiTask('es6transpiler', 'Transpile ES6 to ES5', function () {
		var done = this.async();
		var options = this.options();
		var fileCount = 0;

		delete options.filename;
		delete options.outputToConsole;
		delete options.outputFilename;

		eachAsync(this.files, function (el, i, next) {
			var result;

			options.src = grunt.file.read(el.src[0]);

			try {
				result = es6transpiler.run(options);
			} catch (err) {
				return next(err);
			}

			if (result.errors.length > 0) {
				return next(result.errors.join('\n'));
			}

			grunt.file.write(el.dest, result.src);
			fileCount++;
			next();
		}, function (err) {
			if (err) {
				return grunt.warn(err);
			}

			if (fileCount > 0) {
				grunt.log.writeln(chalk.green(fileCount, fileCount === 1 ? 'file' : 'files', 'transpiled successfully'));
			} else {
				grunt.log.writeln(chalk.yellow('No files transpiled'));
			}

			done();
		});
	});
};
