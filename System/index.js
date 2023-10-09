console.log(process.arch);
console.log(process.argv);
console.log(process.platform);


if (process.argv.length > 0) {
  process.argv.forEach((arg, index) => {
    console.log(`${index}: ${arg}`)
  })
}

// 内存
console.log(process.memoryUsage());
console.log(process.memoryUsage().rss);
console.log(process.memoryUsage().heapTotal);
console.log(process.memoryUsage().heapUsed);