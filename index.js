const http = require('http');
const data = require('./data');


// This is the way to create the server in node 
// let app = http

// app.createServer((request, response)=> {
//     //response.writeHead(status, {Content-type: file/type})  // formate
//     response.writeHead(200, {'Content-type':'application\json'});  // header infomation and 
//     response.write(JSON.stringify(data));                          // to convert json data in object
//     response.end();
// }).listen(7000)


// app.createServer((req, res)=> {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write("hello world");
//     res.end();
// }).listen(8000)


// using the path module and fs togeter

const fs  =  require('fs');
const path = require('path');

const getDir = path.join(__dirname, 'files');
console.log(getDir);

function Cretefiles(filename, fileType, frquencyOfFile, content ){
    for(let i =0; i<frquencyOfFile; i++){
        fs.writeFileSync(`${getDir}/${filename}${i}.${fileType}`, `${content}`)
    }
}

function Removefiles(filename, fileType, frquencyOfFile, Content){
    for(let i =0; i<frquencyOfFile; i++){
        fs.unlinkSync(`${getDir}/${filename}${i}.${fileType}`)
    }
}

//         fname  f/type f/no  Content
Cretefiles('Ritu', 'txt', 2, "i hate u ");
Cretefiles('abhay', 'py', 2, "content ");


//           fname  f/type f/no
Removefiles('abhay', 'py', 2);  
Removefiles('Ritu', 'txt', 2);



