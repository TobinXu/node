const fs = require('fs');

fs.watchFile('./1.txt', {persistent: true, interval: 300},(status) => {
  if (status) {
    console.log('file changed', status);
  }
})