const database = require('./database');
const client = new database('./test.db');

client.on('load', function() {
    console.log('loaded');
    console.log(client.get('my site'));
    client.set('my site', 'http://www.baidu.com', function(err) {
      console.log('write', err);
    });
    client.del('test')
})