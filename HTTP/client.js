const http = require('http');

const req = http.request('http://127.0.0.1:8000', function(res) {
  console.log('http headers', res.headers);

  res.on('data', function(data) {
    console.log(res.statusCode);
    console.log('body', data.toString());
  })
})

req.end();