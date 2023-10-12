const cp = require('child_process');

cp.execFile('notepad', ['www.github.com'], function(err, stdout, stderr) {
  if (err) {
    console.log(err);
  }
  console.log('stdout', stdout);
  console.log('stderr', stderr);
})