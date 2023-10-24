const io = require('socket.io')();

io.on('connection', function(client) {
  console.log('connected');

  client.on('message', function(message) {
    console.log('message from client: %s', message);
  })

  io.emit('message', 'this is server')
})

io.listen(8000)