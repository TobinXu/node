const cluster = require('cluster');
const os = require('os');

// 主进程
if (cluster.isMaster) {
  console.log('master process id:', process.pid);
  // cpu数量
  const cpuNum = os.cpus().length;
  console.log('cpu num:', cpuNum);
  for (let i = 0; i < cpuNum; i++) {
    // 分派子进程
    cluster.fork();
  }
  // 如果工作进程关闭了，重启一个
  // cluster.on('exit', function(worker, code) {
  //   if (code !== 0 && !worker.suicide) {
  //     console.log('worker crashed. Starting a new worker')
  //     cluster.fork();
  //   }
  // })

  // 服务器收到这个消息
  process.on('SIGINT', () => {
    console.log('ctrl+c');
    process.exit()
  })

  const express = require('express')();
  express.listen(9000);
  express.get('/restart', function(req, res, next) {
    const workers = Object.keys(cluster.workers)

    // 重启函数
    function restart_worker(i) {
      if (i >= workers.length) return
      // 第i个工作进程
      const worker = cluster.workers[workers[i]]
      console.log(`Stopping worker: ${worker.process.pid}}`)
      // 中断工作进程
      worker.disconnect();
      // 工作进程退出时
      worker.on('exit', function() {
        // if (!worker.suicide) {
        //   console.log('suicide')
        //   return
        // }
        //启动工作进程
        const new_worker = cluster.fork()
        //当新的工作进程，准备好，并开始监听新的连接时，迭代重启下一个工作子进程
        new_worker.on('listening', function() {
          restart_worker(i+1)
        })
      })
    }
    //重启第一个工作进程
    restart_worker(0);
    res.end("restart ok");
  })
} else {
  // 子进程执行内容
  const http = require('http');
  const pid = process.pid;
  http.createServer(function(req, res) {
    console.log(`Handing request from ${pid}`)
    res.end(`Hello from ${pid}\n`)
  }).listen(8000, function() {
    console.log(`Started ${pid}`)
    console.log('Hello from baby')
  })
}