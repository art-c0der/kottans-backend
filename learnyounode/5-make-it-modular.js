const fs = require('fs');
const mymodule = require('./5-mymodule');

mymodule(fs.readdir())
