const express = require('express')
const  reqAcess = require('./middleware.js')  // middleware in external file 
const app =  express()

const route = express.Router();


// Basic Middleware for all route 
// This is what we called middle ware (this will intract with the routes)
// const reqAcess = (req, res, next) =>{  // this is middleware if the condition is sitisified 
//     if(!req.query.age){   
//         res.send("Please provide age");
//     }else if(req.query.age < 18){
//         res.send("You are not allow to access this page ");
//     }else{
//         next();  // this is the final conditation which is mandatory to use in condition 
//     }
// };

// 1. FOR ALL ROUTE  (BT DEFAULT)
// app.use(reqAcess); // This is how we can use or set the middleware to the app (for all the route )


// 2. GROUP MIDDLEWARE
// To use as group u need to do this as a route.use(middleware Function)
route.use(reqAcess);

app.get('/' , (req, res)=> {
    res.send("Welcome to homepage");
})

// 3. FOR SINGLE ROUTE
// route Level Middleware to set (u need pass the middleware function refrance to the route as parameter)
app.get('/profile', reqAcess,(req, res)=> {
    res.send("This is Profile Page");
})

// Group middleware use -- Start
route.get('/contact', (req, res)=> {
    res.send("Wellcome to the contact page")
})

route.get('/service', (req,res)=>{
    res.send('Wellcome to the service page ')
})

route.get('/about' , (req, res) => {
    res.send("Welcome to About page");
})

// group middleware end here 
app.use('/', route);
app.listen(5000);