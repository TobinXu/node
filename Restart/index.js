const fs = require('fs');
const exec = require('child_process').exec;

function watch() {
  const child = exec('node server.js');
  const watcher = fs.watch(__dirname + '/server.js', function(event) {
    console.log('file changed, reload');
    child.kill();
    watcher.close();
    watch();
  })
}

watch(); 