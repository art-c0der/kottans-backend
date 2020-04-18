const http = require('http');

http.get(process.argv['2'], response => {
  response.setEncoding('utf8');
  let rawData = '';
  response.on('data', data => rawData += data)
  response.on('end', ()=>console.log(rawData))
  response.on('error', console.error)
}).on('error', console.error)
