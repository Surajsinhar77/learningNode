const http = require('http');
const data = require('./data');

let app = http

app.createServer((request, response)=> {
    response.writeHead(200, {'Content-type':'application\json'});  // header infomation and 
    response.write(JSON.stringify(data));                          // to convert json data in object
    response.end();
}).listen(7000)


app.createServer((req, res)=> {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("hello world");
    res.end();
}).listen(8000)

