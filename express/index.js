const express = require('express');

const app = express();

//  当访问根目录时触发
app.get('/', function(req, res) {
  res.send('Hello World!');
  // res.status(404).send('Sorry, cant find that');
} )

const server = app.listen(8000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port)
})