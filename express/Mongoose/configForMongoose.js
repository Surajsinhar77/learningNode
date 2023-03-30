const mongoose = require('mongoose');

const dbAddress = 'mongodb://localhost:27017/products';
const connection = ()=>{
    mongoose.connect(dbAddress);
    console.log("connection SeccessFull ")
}

connection();


