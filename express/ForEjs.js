const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('home');
});

app.get('/profile', (req, res)=>{
    const detail = {
        name : "suraj",
        course : "Be CSE",
        place : "Chandigarh",
        skill : ['c++', 'python', 'js', 'C', "java" ],
    }
    res.render('profile', {detail});
});

app.get('/contact' , (req, res)=>{
    res.render('contact')
})

app.listen(5000);