const cp = require('child_process');
const child = cp.fork('./child.js');
child.on('message', function(msg) {
  console.log('[father receive msg]:', msg);
})

child.send('msg from father');