const http = require('http');
const data = require('./data');

http.createServer((request, response)=> {
    response.writeHead(200, {'Content-type':'application\json'});
    response.write(JSON.stringify(data));
    response.end();
}).listen(7000);
