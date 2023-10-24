const v8 = require('v8');
const fs = require('fs');

const js_code = fs.readFileSync('./test.js').toString();

// 生成字节码
const script = new vm.Script(js_code, {produceCachedData: true});
const bytecode = script.createCachedData();

// 保存字节码
fs.writeFileSync(__dirname+'./test.jsb', bytecode);