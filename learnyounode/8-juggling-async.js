const http = require('http');

const urls = [process.argv['2'], process.argv['3'], process.argv['4']];

const counter = [];
const resultData = [];

const getData = (url, index) => {
  http.get(url, response => {
    response.setEncoding('utf8');
    let rawData = '';
    response.on('data', data => rawData += data)
    response.on('end', ()=>{
      resultData[index] = rawData;
      counter.push(index);
      counter.length === urls.length && console.log(resultData.join('\n'));
    })
    response.on('error', console.error)
  }).on('error', console.error)  
}

if(urls.length > 0){
  urls.forEach((url, index) => getData(url, index));
}


