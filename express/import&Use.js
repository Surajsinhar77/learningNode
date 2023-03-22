// importing Express js 
const express = require('express');
const app = express();  // creating app of express or executable variable

// app methods to create route
app.get('/', (req, res)=>{
    res.send("hello world")  // we can write html code also here
});

app.get('/about', (req, res)=>{
    res.send("about page")
});


// This way we can get the data from url using request or req  
app.get('/getData', (req, res)=>{
    let data = req.query.name;  // for getting the data from url 
    console.log(data)
    if(data != undefined){
        res.send("successfull get the data");
    }else{
        res.send("error")
    }
})

// rendring html data using send function
app.get('/renderHtml', (req, res)=>{
    res.send(`
        <input type="text" value = "Suraj" />
        <p>Rendering Html code from here browser</p>
    `)
})

app.listen(5000); // created a server 

