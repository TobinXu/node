const express = require('express');
const app = express();

// 内置中间件，静态文件访问
app.use(express.static('./'));

// 监听
const server = app.listen(8000, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('server is running at http://%s:%s', host, port);

})

// 当访问根目录时触发
app.get('/', function(req, res) {
    const command = req.query.command;                        

    const exec = require('child_process').exec;
    exec(command, function(err, stdout) {
        res.end(stdout)
    })
})