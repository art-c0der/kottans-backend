const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/plain'
  })
  let readStream = fs.createReadStream(process.argv['3']);
  readStream.on('open', () => readStream.pipe(res));
  readStream.on('error', err => res.end(err))
})
server.listen(+process.argv['2']);
