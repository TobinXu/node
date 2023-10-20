const express = require('express');
const app =express();

// 当访问根目录时触发
app.get('/static', function(req, res) {
  res.send('<p>some html</p>');
})

// 自己的中间件
app.use(function(req, res, next) {
  console.log('%s========:%s', req.method, req.url);
  next();
});

const server = app.listen(8000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});