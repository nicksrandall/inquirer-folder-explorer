'use strict';
import inquirer from 'inquirer';
import path from 'path';
import getDirectories from './getDirectories';

export default function (message = 'Please choose a folder', basePath = './', callback) {
  var depth = 0;
  var ui = new inquirer.ui.BottomBar();


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
        callback(srcPath);
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
