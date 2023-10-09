var module = require('./model');
console.log(module.method())
console.log(module.method2())

console.log(require.cache);
delete require.cache[require.resolve("./model")];
console.log("已卸载模块");
console.log(require.cache);