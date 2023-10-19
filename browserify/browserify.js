const browserify = require('browserify');

const b = browserify();
b.add('./main.js');
b.bundle().pipe(process.stdout);