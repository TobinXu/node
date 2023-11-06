const http = require('http');
let test = 'this is a test';

const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World');
  res.end();
})

server.listen(8000, function() {
  console.log('listening on prot 8000');
})

// repl部分
const net = require('net');
const repl = require('repl');
net.createServer(function(socket) {
  const r = repl.start({
    input: socket,
    output: socket,
    terminal: true,
    useGlobal: true
  });
  r.on('exit', function() {
    socket.end();
  })
  r.context.server = server;
  r.context.test = test;
}).listen(1337);

console.log('repl server on port 1337');