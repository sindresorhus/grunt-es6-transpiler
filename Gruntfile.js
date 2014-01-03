'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		es6transpiler: {
			test: {
				files: {
					'temp.js': 'fixture.js'
				}
			}
		},
		simplemocha: {
			test: {
				src: 'test.js'
			}
		},
		clean: {
			test: ['temp.js']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('default', [
		'clean',
		'es6transpiler',
		'simplemocha',
		'clean'
	]);
};
