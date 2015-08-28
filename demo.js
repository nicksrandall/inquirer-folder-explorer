var folderExplorer = require('./dist');

folderExplorer('Please choose a folder', './', function (folder) {
  console.log('you selected folder: ' +  folder);
});
