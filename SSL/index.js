const fs = require('fs');
const https = require('https');

const options = {
  key: fs.readFileSync('./privatekey.pem'),
  cert: fs.readFileSync('./certificate.pem')
}

const server = https.createServer(options, function(req, res) {
  console.log('connected');
  res.write('welcome');
  res.end();
})

server.listen(8000, function() {
  console.log('server listening on port 8000');
})