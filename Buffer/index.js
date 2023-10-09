var buf = Buffer.alloc(10);
buf[0]= 22;
console.log(buf[0]);  // 22

var fs = require('fs');
fs.readFile('./index.js',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        console.log(data.toString());
    }
})