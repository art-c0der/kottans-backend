const fs = require('fs');
const newLinesCount = fs.readFileSync(process.argv[2]).toString().split('\n').length;
console.log(newLinesCount-1);
