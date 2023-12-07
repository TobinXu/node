const cluster = require('cluster');
const os = require('os');

// 主进程
if (cluster.isMaster) {
  // cpu数量（核数）
  const cpus = os.cpus().length;
  console.log('Clustering to %s CPUs', cpus);
  for (let i = 0; i < cpus; i++) {
    // 分派子进程
    cluster.fork();
  }
  // 如果工作进程关闭了，重启一个
  cluster.on('exit', function(worker, code, signal) {
    if (code !== 0 && !worker.suicide) {
      console.log('Worker %s crashed. Starting a new worker', worker.id);
      cluster.fork();
    }
  })
} else {
  // 子进程执行的内容
  const http = require('http');
  const pid = process.pid;
  http.createServer(function(req, res) {
    console.log(`Handing request from ${pid}`);
    res.end(`Hello from ${pid}\n`)
  }).listen(8000, function() {
    console.log(`Start ${pid}`);
  })

  // 秒数后触发，主动抛出一个错误
  setTimeout(() => {
    throw new Error('oooops!')
  }, Math.ceil(Math.random() * 3) * 1000);

}