// const cp = require('child_process');

// const child = cp.spawn('ping', ['www.github.com']);
// child.on('error', console.error);
// child.stdout.pipe(process.stdout);
// child.stderr.pipe(process.stderr);

const http = require('http');

http.createServer(function(req, res) {
  const cp = require('child_process');
  const child = cp.spawn('ping', ['-t', 'www.github.com']);
  child.on('error', console.error);
  child.stdout.pipe(res);
  child.stderr.pipe(res);
}).listen(8000);