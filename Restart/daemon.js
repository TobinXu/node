/*
 *守护进程
 * 功能：检测主进程（设名称为abc，下同）工作是否正常，如出现异常：无法访问，则对其进行重启
 * 本程序可以用forever启动，防止本进程出异常退出，达到双重守护效果
 */
 
 process.envUV_THREADPOOL_SIZE = 128;

const { exec } = require('child_process');

// 启动abc
function start_abc() {
  exec('forever start abc.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  })
}
 
// 关闭abc
function stop_abc() {
  exec('forever stop abc.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  })
}

// 启动abc
start_abc();

const request = require('request');

// abc地址和端口
const abc_host = 'http://127.0.0.1:' + require('./config.js').shield_port + "/";
console.log('abc address:', abc_host);

// 10秒，检测一次abc是否正常
setInterval(function() {
  request(abc_host, {timeout: 5000}, function(err) {
    if (err !== null) {
      if (err.code === 'ETIMEDOUT' || err.code === 'ECONNREFUSED' || err.code === 'ESOCKETTIMEDOUT') {
        // 重启abc
        stop_abc();
        start_abc();
      } else {
        console.log('Error:', err.code);
      }
    }
  })
}, 100000)