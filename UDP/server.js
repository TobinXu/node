const dgram = require('dgram');

server();

function server() {
  const socket = dgram.createSocket('udp4');
  socket.on('message', function(msg, rinfo) {
    process.stdout.write(msg.toString());
  })

  socket.on('listening', function() {
    console.log('server ready:', socket.address());
  })

  socket.bind(8000);
}