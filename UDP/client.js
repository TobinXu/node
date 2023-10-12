const dgram = require('dgram');
const fs = require('fs');

client();

function client() {
  // 通过流读取文件
  const readStream = fs.createReadStream('./file.txt');
  readStream.on('readable', function() {
    send();
  });

  function send() {
    const message = readStream.read(16);
    const socket = dgram.createSocket('udp4');

    // 没有内容时，关闭连接
    if (!message) {
      return socket.unref();
    }

    // 连接本地8000端口
    socket.send(message, 0, message.length, 8000, '127.0.0.1', function(err, bytes) {
      send();
    })
  }
}

