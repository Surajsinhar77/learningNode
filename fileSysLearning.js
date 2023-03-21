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

function Removefiles(filename, fileType, frquencyOfFile){
    for(let i =0; i<frquencyOfFile; i++){
        fs.unlinkSync(`${getDir}/${filename}${i}.${fileType}`)
    }
}

//         fname  f/type f/no  Content
Cretefiles('suraj', 'txt', 2, "i hate u ");
Cretefiles('abhay', 'py', 2, "content ");


//           fname  f/type f/no
// Removefiles('abhay', 'py', 2);  
// Removefiles('suraj', 'txt', 2);


// 
// fs.readdir( getDir , (err ,item)=>{   // readdir is use to read the all file of given or By defult current directory 
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(item);
// })

// read Directory function readdir(pathToread, function(getError, theElement))
fs.readdir(getDir, (er, element) => {

// forEach 
// element which is Array and then forEach() function( element, otherFunction() to get element one by one )
    element.forEach(item => {
        console.log(item);
    });
})


// this how to read all the file and delete it by loop
fs.readdir(getDir, (er, element) => {

    // forEach 
    // element which is Array and then forEach() function( element, otherFunction() to get element one by one )
    element.forEach(item => {
        fs.unlinkSync(`${getDir}/${item}`)
    })
})


