const express = require('express')
require('./configForMongoose');
const productFunction = require('./ProductSchemaModel');
const product = productFunction();
const app = express()

app.use(express.json())

// use to inset in database
app.post('/create', async(req, res)=>{
    const data = new product(req.body);
    const result = await data.save(); // to save 
    // console.log(req.body)
    console.log(result)
    res.send('Done')
})

// get data from the database
app.get('/list', async(req, res)=>{
    const data = await product.find();
    res.send(data);
})

app.put('/update/:_id', async (req, res)=>{
    const data = await product.updateOne(
        req.params ,
        {
            $set: req.body
        }    
    );
    console.log(data);
    res.send("Data is SuccessFull updated");
})

app.delete('/del/:_id', async (req, res)=>{
    const data = await product.deleteOne(
        req.params
    );
    console.log(data)
    res.send("Data is Deleted");
})

app.listen(7000)