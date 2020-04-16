const fs = require('fs');
const content = fs.readFile(process.argv[2], (err, data) => {
  if (err) throw err;
  // data.toString().split('\n');
  console.log(data)
  return data;
});
// const lines = content.length - 1;

// console.log(lines);
