'use strict';
import inquirer from 'inquirer';
import getDirectories from './getDirectories';

export default function (srcpath, callback) {

  prompt(srcpath);

  function prompt(srcpath) {
    var choices =  getDirectories(srcpath).concat([
      new inquirer.Separator(),
      'choose this folder',
      new inquirer.Separator(),
      '.. back'
    ]);

    process.stdout.write('\u001B[2J\u001B[0;0f');

    inquirer.prompt([{
      type: 'list',
      name: 'path',
      message: 'Where would you put it?',
      choices: choices
    }], function (answers) {
      if (answers.path === 'choose this folder') {
        callback(srcpath);
      } else if (answers.path === '.. back') {
        prompt(path.dirname(srcpath));
      } else {
        prompt(path.join(srcpath, answers.path));
      }
    });
  }

};
