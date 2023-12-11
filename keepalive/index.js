const http = require('http');
http_proxy = require('http-proxy');

http.createServer(function (req, res) {
  console.log('client to proxy, req.headers: ', req.headers);
  const proxy = http_proxy.createProxyServer({});
  proxy.on('proxyReq', function (proxyReq, req, res, options) {
    console.log('proxy to server, proxyReq.headers: ', proxyReq.headers);
    console.log('proxy to server, req.options: ', req.headers.options);
  });
  proxy.on('proxyRes', function (proxyRes, req, res) {
    console.log('server to proxy, proxyRes.headers: ', proxyRes.headers);
    const body = [];
    proxyRes.on('data', function (chunk) {
      body.push(chunk);
    });
    proxyRes.on('end', function () {
      console.log('res from proxy server:', Buffer.concat(body).toString());
      res.end(",abc");
    });
    proxyRes.on('error', function (err) {
      // 处理代理响应错误
      console.error('Proxy response error:', err);
    });
  });

  proxy.on('error', function (err, req, res) {
    // 处理代理请求错误
    console.error('Proxy request error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
  

  proxy.web(req, res, { target: 'http://localhost:3000',
  agent: new http.Agent({ keepAlive: true, keepAliveMsecs: 10000 }),
  selfHandleResponse: true });


}).listen(8000);

const http2 = require('http');
http2.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(9000);