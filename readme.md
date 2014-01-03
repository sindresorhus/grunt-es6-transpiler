# [grunt](http://gruntjs.com)-es6-transpiler [![Build Status](https://secure.travis-ci.org/sindresorhus/grunt-es6-transpiler.png?branch=master)](http://travis-ci.org/sindresorhus/grunt-es6-transpiler)

> Transpile ES6 to ES5 with [es6-transpiler](https://github.com/termi/es6-transpiler)

*Issues with the output should be reported on the es6-transpiler [issue tracker](https://github.com/termi/es6-transpiler/issues).*


## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```sh
npm install --save-dev grunt-es6-transpiler
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-es6-transpiler');
```

*Tip: the [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) module makes it easier to load multiple grunt tasks.*


[grunt]: http://gruntjs.com
[Getting Started]: http://gruntjs.com/getting-started


## Example

```js
grunt.initConfig({
	es6transpiler: {                           // Task
		dist: {                                // Target
			files: {                           // Dictionary of files
				'dist/app.js': 'src/app.js'    // Destination: Source
			}
		}
	}
});

grunt.loadNpmTasks('grunt-es6-transpiler');
grunt.registerTask('default', ['es6transpiler']);
```


## Options

Use the es6-transpiler [options](https://github.com/termi/es6-transpiler#options), except for `filename`, `src`, `outputToConsole`, `outputFilename`.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
