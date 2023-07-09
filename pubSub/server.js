const http = require('http');

const eventBus = require('./eventBus');

const server = http.createServer((req,res)=>{

//console.log('Request: ' + req.url);

eventBus.publish('request', {method: req.method, url: req.url});

    res.end();

});

server.listen(5000);
console.log('Server is running on port 5000...');