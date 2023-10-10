// 核心模块
const fs = require('fs');

const event_emitter = require('events').EventEmitter;

// 数据库，初始化参数是数据库路径（包含文件名称
const database = function(path) {
  this.path = path;
  this.records = Object.create(null);
  // 流，写文件
  this.write_stream = fs.createWriteStream(this.path, {encoding: 'utf-8', flags: 'a'});
  this.load()
}

// 类式继承，让database具备事件能力
database.prototype = Object.create(event_emitter.prototype);
// 一步操作，通过EventEmitter实现：在加载完记录后发出load事件
database.prototype.load = function() {
  // 流，读文件
  const stream = fs.createReadStream(this.path, {encoding: 'utf-8'});
  const database_this = this;
  let data = '';
  // 流的读取事件
  stream.on('readable', function() {
    data += stream.read();
    // 以换行分割
    const record_stream = data.split('\n');
    data = record_stream.pop();
    for (let i = 0; i < record_stream.length; i++) {
      let record = JSON.parse(record_stream[i]);
      if (record.value == null) {
        // 删除
        delete database_this.records[record.key];
      } else {
        // 更新
        database_this.records[record.key] = record.value;
      }
    }
  })

  // 读取完成
  stream.on('end', function() {
    database_this.emit('load');
  })
}

// 根据key值返回对应的value
database.prototype.get = function(key) {
  return this.records[key] || null;
}

// 写入
database.prototype.set = function(key, value, cb) {
  const to_write = JSON.stringify({key: key, value: value}) + '\r\n';
  if (value === null) {
    delete this.records[key];
  } else {
    this.records[key] = value;
  }
  this.write_stream.write(to_write, cb);
} 

// 删除
database.prototype.del = function(key, cb) {
  return this.set(key, null, cb);
}

module.exports = database;