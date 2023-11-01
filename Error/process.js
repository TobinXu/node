const http = require('http');
const domain = require('domain');

const d = domain.create();
d.run(function() {
    const server = http.createServer(function(req, res) {
        d.on('error', function(err) {
            res.statusCode = 500;
            res.end('internal server error');
            server.close();
            setTimeout(() => {
                process.exit(1);
            }, 3000);
            console.log('Error:', err.message);
        }); 
        response.end('hello world');
    });
    server.listen(3000);
})