const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');  // set the ejs engine to the project or file

app.get('/', (req, res)=>{
    res.render('home'); // sending or rendering html data to the browser by using Render function (home is page in views)
});

app.get('/profile', (req, res)=>{
    const detail = {
        name : "suraj",
        course : "Be CSE",
        place : "Chandigarh",
        skill : ['c++', 'python', 'js', 'C', "java" ],
    }
    res.render('profile', {detail});  // sending data to browser or page 
});

app.get('/contact' , (req, res)=>{
    res.render('contact')
})

app.listen(5000);