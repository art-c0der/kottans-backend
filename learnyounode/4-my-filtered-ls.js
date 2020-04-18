const fs = require('fs');
const path = require('path');

const tragetDirectory = process.argv['2'];
const filteredExt = `.${process.argv['3']}` || '';

fs.readdir(
  tragetDirectory, 'utf-8', (error, files) => {
    if (error) return error;
    if (files.length > 0) {
      const filterredFiles = files.filter(file => path.extname(file) === filteredExt);
      const result = filterredFiles.join('\n');
      console.log(result);
    }
  }
)
