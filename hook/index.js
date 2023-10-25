const old_console = console.log;
console.log = function(msg) {
  old_console('\u001b[32m ' + msg + ' \u001b[0m');
}
const old_console_err = console.error;
console.error = function(msg) {
  old_console_err('\u001b[31m ' + msg + ' \u001b[0m');
}

console.log('Hello www.test.com');
console.error('Hello www.test.com');

const fs = require('fs');
const old_fs_exits = fs.exists;
fs.exists = function(path, callback) {
  console.log('fs.exists hook called');
  old_fs_exits(path, callback);
}

fs.exists(__dirname + '/test', function(exists) {
  const txt = exists ? 'exists' : 'not exists';
  console.error('test ' + txt);
});