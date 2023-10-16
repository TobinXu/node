const cp = require('child_process');

cp.exec('dir', function(err, stdout, stderr) {
  if (err) console.error(err);
  console.log('stdout', stdout);
  console.log('stderr', stderr);
})