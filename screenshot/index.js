const express = require('express');
const app = express();

// 中间件，实现屏幕监控
app.use(function(req, res, next) {
  const screenshot = require('desktop-screenshot');

  // 屏幕截图
  screenshot('screenshot.png', function(error, complete) {
    console.log(req.url);
    if (error) {
      console.log("Screenshot failed", error);
    } else {
      console.log('Screenshot succeeded');
    }
  });
  next();
})

// 内置中间件，静态文件访问
app.use(express.static('./'));

// 监听
const server = app.listen(8000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
})

// 当访问根目录时触发
app.get('/', function(req, res) {
  res.send('Hello World!')
})
