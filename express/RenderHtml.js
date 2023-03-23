const express = require('express');
const path = require('path');  // to get paths


// To get the path of the Public folder
 const publicPath = path.join(__dirname, 'public');  // join is a function which is use to join the curent directory to folder on it

// console.log(publicPath)
const app = express();

// This way u can render html page to browser with extension .html
// app.use(express.static(publicPath));  to remove html extension we don't gone use this one


// This is how we can remove extention from the url while routing 
app.get('/', (req, res)=>{
    res.sendFile(`${publicPath}/index.html`);
})

app.get('/about', (req, res)=>{
    res.sendFile(`${publicPath}/about.html`);
})

app.get('/contact', (req, res)=>{
    res.sendFile(`${publicPath}/contact.html`);
})


// for else if we don't get the valid routes / then this route is runs '*'
app.get('*', (req, res)=>{
    res.sendFile(`${publicPath}/404.html`);
})

// create the server
app.listen(5000);