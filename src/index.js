'use strict';
var inquirer = require('inquirer');
var path = require('path');
var getDirectories = require('./getDirectories');

module.exports = function (message = 'Please choose a folder', basePath = './', callback) {
  var depth = 0;
  var initialDraw = true;

  prompt(basePath);

  function prompt(srcPath) {
    var choices =  getDirectories(srcPath);

    if (choices.length > 0) {
      choices.push(new inquirer.Separator());
    }

    choices.push({
      name: 'choose this folder',
      value: srcPath,
      short: path.relative(basePath, srcPath)
    });

    if (depth > 0) {
      choices.push(new inquirer.Separator());
      choices.push('.. back');
    }

    if (initialDraw === false) {
      process.stdout.moveCursor(0, -1);
    } else {
      initialDraw = false;
    }
    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    inquirer.prompt([{
      type: 'list',
      name: 'path',
      message: function () {
        return message + ` (current folder: ${srcPath})`;
      },
      choices: choices
    }]).then(function (answers) {
      if (answers.path === srcPath) {
        callback(null, srcPath);
      } else if (answers.path === '.. back') {
        depth--;
        prompt(path.dirname(srcPath));
      } else {
        depth++;
        prompt(path.join(srcPath, answers.path));
      }
    });
  }
};
