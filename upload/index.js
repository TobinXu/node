const express = require('express');
const app = express();

// form表单需要的中间件
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
// 临时文件存储位置
app.use(multipart({uploadDir: './temp_folder'}));

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
})

// 浏览器访问localhost会输出一个html页面
app.get('/', function(req, res) {
  res.type('text/html');
  res.sendfile('./index.html');
})

// 这里接受form表单请求的接口路径，请求方式为post
app.post('/upload', multipartMiddleware, function(req, res) {
  // 这里打印可以看到接收到的文件信息
  console.log('接收到的文件信息',req.files);
  // 成功接受到浏览器传来的文件，可以对文件进行一系列操作，比如重命名，移动位置等
  // 重命名文件
  // const fs = require('fs');
  // fs.renameSync(req.files.upload.path, './upload/' + req.files.upload.originalFilename);
  // 返回浏览器上传成功的信息
  res.send('upload success!');
})