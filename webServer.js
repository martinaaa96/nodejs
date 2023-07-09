const http = require('http');


const server = http.createServer((req,res)=>{
    res.writeHead(200, {
        'content-type': 'text/html'
    })
switch (req.url){
    case '/':
        res.write('<h1>Hello  from NodeJS!</h1>');
        break;
        case '/dogs':
            res.write('<h2>Some dogs here</h2>');
            break;
            default:
                res.write('<h3>Anything else here</h3>');
                break;
}
    res.end();

});

server.listen(5000);


console.log('Server is running on port 5000...')