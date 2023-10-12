const http = require('http');
const url = require('url');

http.createServer(function(req, res) {
  console.log('start request', req.url);
  const options = url.parse(req.url);
  options.headers = req.headers;

  const proxyRequest = http.request(options, function(proxyRequest) {
    proxyRequest.on('data', function(chunk) {
      console.log('proxyResponse length:', chunk.length);
    })
    proxyRequest.on('end', function() {
      console.log('proxyRequest end');
      res.end();
    })
    res.writeHead(proxyRequest.statusCode, proxyRequest.headers);
  })

  req.on('data', function(chunk) {
    console.log('in request length', chunk.length);
  })

  req.on('end', function() {
    console.log('original request ended');
    proxyRequest.end();
  })
}).listen(8080);