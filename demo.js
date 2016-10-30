var folderExplorer = require('./dist');

folderExplorer('Please choose a folder', './').then((folder) => {
  console.log('you selected folder: ' +  folder);
}).catch((err) => {
  console.error('some error')
});
