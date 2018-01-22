'use strict';
var inquirer = require('inquirer');
var path = require('path');
var getDirectories = require('./getDirectories');

module.exports = function (message = 'Please choose a folder', basePath = './', callback) {
  var depth = 0;

  prompt(basePath);

  function prompt(srcPath) {
    var choices =  getDirectories(srcPath);

    if (choices.length > 0) {
      choices.push(new inquirer.Separator());
    }

    choices.push('choose this folder');

    if (depth > 0) {
      choices.push(new inquirer.Separator());
      choices.push('.. back');
    }

    process.stdout.write('\u001B[2J\u001B[0;0f');

    inquirer.prompt([{
      type: 'list',
      name: 'path',
      message: function () {
        return message + ` (current folder: ${srcPath})`;
      },
      choices: choices
    }], function (answers) {
      if (answers.path === 'choose this folder') {
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
