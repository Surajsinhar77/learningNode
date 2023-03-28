const { json } = require('express');
const express = require('express');
const path = require('path');
const insert = require('./mongoDb/insert')

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');  // set the ejs engine to the project or file

app.get('/', (req, res)=>{
    res.render('home'); // sending or rendering html data to the browser by using Render function (home is page in views)
});

app.post('/formData', (req, res)=>{
    // console.warn(req.body)
    let name = req.body.nam
    let brand =  req.body.brand
    let mrp = req.body.mrp_value
    let ldata = req.body.Ldate
    insert(name, brand, mrp, ldata);
    res.send("Data is Inserted in Database ")
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