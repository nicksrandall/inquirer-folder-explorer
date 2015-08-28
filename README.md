# inquirer-folder-explorer
[![npm version](https://badge.fury.io/js/inquirer-folder-explorer.svg)](http://badge.fury.io/js/inquirer-folder-explorer)
[![Build Status](https://travis-ci.org/nicksrandall/nquirer-folder-explorer.svg?branch=master)](https://travis-ci.org/nicksrandall/nquirer-folder-explorer)
[![Coverage Status](https://coveralls.io/repos/nicksrandall/nquirer-folder-explorer/badge.svg?branch=master&service=github)](https://coveralls.io/github/nicksrandall/nquirer-folder-explorer?branch=master)

Allow users to choose a folder using in CLI.

![Example](https://raw.githubusercontent.com/nicksrandall/nquirer-folder-explorer/master/demo/example.gif)

## Why use this?
I was building a CLI tool (using inquirer.js) and needed the user to be able to choose a folder to perform an action on.

## Example Usage
```js
var folderExplorer = require('inquirer-folder-explorer');

folderExplorer('Please choose a folder', 'src', function (folder) {
  console.log('you selected folder: ' +  folder);
});
```


## Modules used/included
- *inquirer.js* - Command line prompts

## Contributing

### Dev Modules used/included
- *babel* - compiles ES6 source to ES5. The `--experimental` flag is also enabled so you can use ES7 features.
- *tape* and *argg* for simple, effective testing with less magic than mocha or jasmine.
- *Istanbul* to report test coverage.
- *eslint* and *babel-eslint* to analyze your code for stylistic issues.
- *plato* to analyze the complexity of your source code.
- *coveralls* to send your test results to coveralls.io.

These are just defaults. Feel free to swap out eslint for jshint, or tape for mocha, or whatever you use for CI instead of coveralls.

### Layout

- `src/` - Your ES6 source code goes here. Files have a `.es6` extension for syntax highlighting in Sublime Text with [babel-sublime](https://github.com/babel/babel-sublime)
- `src/tests/` - Your ES6 tests go here.
- `src/.eslintrc` - ESLint configuration
- `coverage/` - Code coverage reports are output here.
- `dist/` - Your generated ES5 source is output here. This directory is under gitignore.
- `.gitignore` - a sensible .gitignore file to prevent you from checking in generated source.
- `.npmignore` - preconfigured to publish only the generated source code.
- `package.json` - Customize this to publish your own module.
- `.travis.yml` - Customize this if you use [Travis CI](https://travis-ci.org/) for builds.
- `.coveralls.yml` - Customize this if you use [coveralls](https://coveralls.io/) for code coverage.
- `README.md` - Delete all this and write your own.

### npm scripts

These scripts are the main way to interact with your module as you develop it.

- `compile` - run [babel](https://babeljs.io/) to compile your ES6 source to ES5. Output goes to the `dist/` directory.
- `lint` - run [ESLint](http://eslint.org/) on your ES6 source and reports any style errors.
- `tape` - test your code.
- `coverage` - run [Istanbul](https://gotwarlost.github.io/istanbul/) on your code to report coverage. Reports output in HTML to the `coverage/istanbul` directory.
- `istanbul` - run Istanbul, but output only lcov files for coveralls to read.
- `coveralls` - run coveralls, using Istanbul's lcov report as input.
- `plato` - run [plato](https://github.com/es-analysis/plato), a code analysis tool, on your generated source (plato doesn't support ES6 at the moment; as soon as it does I'll swap it to analyze ES6 source).
- `test` - run tape, Istanbul, and coveralls.
- `prepublish` - compiles your ES6 source to prepare for publishing to npm.

## Questions?

More info coming soon.
