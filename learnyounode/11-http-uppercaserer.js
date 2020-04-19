const http = require('http');

http.createServer((req, res) => {
  var body = [];
  req.on('data', data => body.push(data.toString().toUpperCase()));
  req.on('end', function () {
    res.writeHead(200);
    res.end(body.join(''));
  });
}).listen(+process.argv['2'])


// 'use strict'
// const http = require('http')
// const map = require('through2-map')

// const server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))
