// const http = require('http');
// const fs = require('fs');

// http.createServer(function(req, res) {
//   fs.readFile(__dirname+'/index.js', function(err, data) {
//     if (err) {
//       res.statusCode = 500;
//       res.end(String(err));
//     } else {
//       res.end(data);
//     }
//   })
// }).listen(8000);

var http = require("http");
var fs = require("fs");
var zlib = require("zlib");

const server = http.createServer(function(req,res){
  res.writeHead(200,{'content-encoding': 'gzip'});
  fs.createReadStream( "./test.html").pipe(zlib.createGzip()).pipe(res);
    // fs.readFile("./test.html",function(err,data){
    //     if(err){
    //         res.statusCode = 500;
    //         res.end(String(err));
    //     }else{
    //         res.end(data);
    //     }
    // })
});
// console.log('server listening on 8000', server)
server.listen(8000);