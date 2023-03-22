const express = require('express');
const path = require('path');  


// To get the path of the Public folder
const publicPath = path.join(__dirname, 'public');  // join is a function which is use to join the curent directory to folder on it

// console.log(publicPath)
const app = express();

// This way u can render html page to browser
app.use(express.static(publicPath));

// create the server
app.listen(5000);