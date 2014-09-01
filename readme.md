# grunt-es6-transpiler [![Build Status](https://travis-ci.org/sindresorhus/grunt-es6-transpiler.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-es6-transpiler)

> Transpile ES6 to ES5 with [es6-transpiler](https://github.com/termi/es6-transpiler)

*Issues with the output should be reported on the es6-transpiler [issue tracker](https://github.com/termi/es6-transpiler/issues).*


## Install

```sh
$ npm install --save-dev grunt-es6-transpiler
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	es6transpiler: {
		dist: {
			files: {
				'dist/app.js': 'src/app.js'
			}
		}
	}
});

grunt.registerTask('default', ['es6transpiler']);
```


## Options

Use the es6-transpiler [options](https://github.com/termi/es6-transpiler#options), except for `filename`, `src`, `outputToConsole`, `outputFilename`.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
