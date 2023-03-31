const express = require('express');
require('./configForMongoose')
const productFunction = require('./ProductSchemaModel')

const app = express()
const product = productFunction();
app.use(express.json())

app.get('/search/:key', async(req, res)=>{
    const data = await product.find(
        {
            "$or": [
                {"name": {$regex: req.params.key}},
                {"brand": {$regex: req.params.key}},
            ]
        }
    )
    console.log(req.params.key);
    res.send(data)
})

app.listen(7000)