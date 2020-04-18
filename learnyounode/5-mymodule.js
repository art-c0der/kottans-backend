const path = require('path');

module.exports = function mymodule(callback) {
  callback(
    tragetDirectory, 'utf-8', (error, files) => {
      if (error) {
        return error
      }
      if (files.length > 0) {
        const filterredFiles = files.filter(file => path.extname(file) === filteredExt);
        const result = filterredFiles.join('\n');
        console.log(result);
      }
    }
  )
};
