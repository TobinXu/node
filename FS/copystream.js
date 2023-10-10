const fs = require('fs');

const read_able = fs.createReadStream('./1.txt');
const write_able = fs.createWriteStream('./2.txt');

read_able.pipe(write_able);