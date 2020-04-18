const http = require('http');

http.get(process.argv['2'], response => {
  response.setEncoding('utf8');
  let rawDataInt = '';
  let rawDataStr = '';
  response.on('data', data => {
    if (isNaN(data)){
      return rawDataStr += data;
    } 
    return rawDataInt += data;
  })
  response.on('end', ()=>{
    console.log(rawDataInt);
    console.log(rawDataStr);
  })
  response.on('error', console.error)
}).on('error', console.error)
