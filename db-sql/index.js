const sqlite3 = require('sqlcipher');

const database = new sqlite3.Database('mydatabase.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
      console.log('new database success');
      // 创建表
      database.run('create table if not exists sharewaf_data(time NUMERIC, domain TEXT, ip TEXT, lon_lat TEXT, address TEXT, url TEXT, type TEXT, agent TEXT', err => {
        if (err) {
          console.error('create database error',err.message);
        } else {
          console.log('create database success');
          // 插入数据
          database.run('insert into sharewaf_data(time, domain, ip, lon_lat, address, url, type, agent) values(?,?,?,?,?,?,?,?)', [new Date().getTime(), 'www.test.com', 'ip', 'lon_lat', 'address', 'url', 'type', 'agent'], err => {
            if (err) {
              console.error('insert data error',err.message);
            } else {
              console.log('insert data success');
              // 查询
              database.all('select * from sharewaf_data', (err, rows) => {
                if (err) {
                  console.error('select data error',err.message);
                } else {
                  // console.log('select data success');
                  console.log(rows);
                }
              })
            }
          })
           
        }
      })
    }
});