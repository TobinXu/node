const dns = require('dns');

dns.lookup('www.github.com', function(err, address, family) {
  if (err) {
    console.log('err:', err);
  }
  console.log('address:', address);
  console.log('family:', family);
})