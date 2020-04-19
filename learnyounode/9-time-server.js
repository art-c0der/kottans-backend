const net = require('net');
const strftime = require('strftime');

const server = net.createServer(socket => {
  socket.write(strftime('%F %H:%M', new Date())+'\n');
  socket.end()
})

server.listen(process.argv['2']);
