const http = require('http');
const makePool = require('./pooler');
const runJob = makePool('./woker.js');

http.createServer(function(req, res) {
  runJob('some dummy job', function(err, data) {
    console.log('father callback get data: ', data);
    if (err) {
      return res.end('get an error:' + err.message)
    }
    res.end('work pool');
  })
}).listen(8000);