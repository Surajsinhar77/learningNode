const getData = require('./mongoConnection');


//async await way 
const insert = async (name, brand, mrp, launchDate) =>{
    const db = await getData();
    const result  = await db.insertOne(  // to inser one collection use insertOne for mant use insertMany 
        {name: name, brand: brand, MRP: mrp, launchDate: launchDate}
    )
    console.log(result);
    if(result.acknowledged){
        console.log("data is updated")
    }
}


// promiss handel way 
const printData = () => {
    getData().then((res)=>{
        res.find({brand: 'lenovo'}).toArray().then((data)=>{
            console.log("Is this is the data")
            console.log(data);
        })
    });
}


// insert('iPhone 10', 'apple', 80500, '01-01-2020')

// printData()
module.exports = insert;