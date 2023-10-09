const zlib = require('zlib');

// 压缩
zlib.deflate('fancy.com is a good web for obfuscating js code', function(err, deflate_buf) {
  console.log(deflate_buf.toString());
  // 解压
  zlib.inflate(deflate_buf, function(err, inflate_buf) {
    console.log(inflate_buf.toString());
  })
})
