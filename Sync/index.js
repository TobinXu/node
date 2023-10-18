// const ex = require('child_process').execFileSync;
// const stdout = ex('ping', ['www.baidu.com']).toString();
// console.log(stdout);

// const ex = require('child_process').spawnSync;
// const stdout = ex('ping', ['www.baidu.com']).stdout.toString();
// console.log(stdout);


const ex = require('child_process').execSync;
const stdout = ex('dir').toString();
console.log(stdout);