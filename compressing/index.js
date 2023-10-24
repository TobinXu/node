const compressing = require('compressing');

// 压缩
compressing.zip.compressDir(__dirname + '/test/', 'test.zip')
.then(() => {
  console.log('zip success');
}).catch(err => {
  console.error(err);
})

//解压
compressing.zip.uncompress(__dirname+"/test.zip", "/test2")
.then(() => {
    console.log('unzip','success');
})
.catch(err => {
    console.error('unzip',err);
});