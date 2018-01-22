var folderExplorer = require('.');

folderExplorer('Please choose a folder', './', function (err, folder) {
  console.log('you selected folder: ' +  folder);
});
