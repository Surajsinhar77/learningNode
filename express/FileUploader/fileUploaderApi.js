
const express = require('express');
const multer =  require('multer');

const app = express();

const updateMidWare = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb){
                  // null, upload location
            cb(null, "uploads");
        },
        filename:function (req, file, cb){
            console.log('i in here')
            cb(null, file.fieldname+"_"+Date.now()+".jpeg");
            // console.log(file.mimetype,file.filename,file.originalname, file.buffer,file.size)
        }
    })
}).single("fileName");

app.post('/uploader',updateMidWare ,(req, res)=>{
    console.log(" u hit the request")
    res.send("file is Uploaded");
})

app.get('/', (req, res)=>{
    res.send(" i am at home");
})

app.listen(7000, ()=>{
    console.log( "Server Running On : "+"http://localhost:"+7000)
});