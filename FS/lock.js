const fs = require('fs');

fs.open('./1.txt', 'wx', (err, fp) => {
  if (err) return console.error(err); 
  fs.close(fp, (err) => {
    if (err) return console.error(err);
    console.log('done');
  })
})