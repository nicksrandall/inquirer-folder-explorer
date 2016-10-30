'use strict';
const inquirer = require('inquirer');
const path =require('path');
const getDirectories = require('./getDirectories');
const promisify = require('es6-promisify');

function askFolder(message = 'Please choose a folder', basePath = './', callback) {
  try {
    var depth = 0;

    prompt(basePath);

    function prompt(srcPath) {
      var choices = getDirectories(srcPath);

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
      }]).then((answers) => {
        if (answers.path === 'choose this folder') {
          callback(srcPath);
        } else if (answers.path === '.. back') {
          depth--;
          prompt(path.dirname(srcPath));
        } else {
          depth++;
          prompt(path.join(srcPath, answers.path));
        }
      }).catch((err) => {
        callback(null, err);
      });
    }
  } catch (err) {
    callback(null, err);
  }
};

module.exports = promisify(askFolder);