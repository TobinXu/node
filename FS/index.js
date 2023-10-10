const fs = require('fs');
const assert = require('assert');

// 同步写入
const fd = fs.openSync('./test.txt', 'w+');
const write_buf = Buffer.alloc(11, 'hello world');
fs.writeSync(fd, write_buf,0, write_buf.length, 0);

// 同步读取
const read_buf = Buffer.alloc(write_buf.length);
fs.readSync(fd, read_buf, 0, write_buf.length, 0);

console.log('read from file: ', read_buf.toString());

// 断言比较写入和读取的内容是否一致
assert.equal(write_buf.toString(), read_buf.toString());

fs.closeSync(fd);