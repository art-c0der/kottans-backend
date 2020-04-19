const http = require('http');

http.createServer((req, res) => {
  const myUrl = new URL(req.url, 'http://test.org/');
  const date = new Date(myUrl.searchParams.get('iso'));
  let result;

  if (myUrl.pathname == '/api/parsetime') {
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  } else if (myUrl.pathname == '/api/unixtime') {
    result = {
      unixtime: date.getTime()
    }
  }

  if (result) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
}).listen(+process.argv['2'])
