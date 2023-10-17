process.on('message', function(job) {
  console.log('work get msg:', job);
  for (let i = 0; i < 10; i++) {
    console.log('worker send:', job);
    process.send('finish job: ' + job + ' ' + i + ' times')
  }
})