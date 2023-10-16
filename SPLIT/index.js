const cp = require('child_process');

cp.spawn('notepad', [], {detached: false,}, function(err, stdout, stderr) {
  if (err) console.error(err);
  console.log('stdout', stdout);
  console.log('stderr', stderr);
})