// main apis GET, POST, PUT  to with mongoDb and node js using express.js
const express =  require('express')
const mongodb = require('mongodb')
const dbConnect = require('./mongoDb/mongoConnection')
const insertObject = require('./mongoDb/insert')
const update = require('./mongoDb/update')
// const delData = require('./mongoDb/delData')

const app = express();
app.use(express.json())  // use to convert coming post data into json


// use to get page and send normal data to web page and get also
app.get('/', (req, res) =>{
    const getData = dbConnect().then((rev)=>{
        rev.find().toArray().then((data)=>{
            res.send(data)
        })
    })
});


// right way to update the data in using the api
app.put('/', async(req, res)=>{
    let result =  await update(req.body, req.body.name)
    if(result.acknowledged && result.modifiedCount > 0){
        res.send("Data is updated")
    }else{
        res.send("failed to Update the data ")
    }
})


// this api use to delete the the certain object form database 
app.delete('/:id', async(req, res)=>{
    const data = await dbConnect();
    const result = await data.deleteOne({_id : new mongodb.ObjectId(req.params.id)}) // This is how we can target the _id of the database 
    console.log(result)
    res.send(result);
})


// use to send and recice secure data 
app.post('/', (req, res)=>{
    insertObject(req.body)
    console.log((req.body))
    res.send('heloji')
});


// to run server port
app.listen(7000)