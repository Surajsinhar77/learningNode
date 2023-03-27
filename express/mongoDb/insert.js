const getData = require('./mongoConnection');


//async await way 
const insert = async () =>{
    const db = await getData();
    const result  = await db.insertOne(  // to inser one collection use insertOne for mant use insertMany 
        {name:'hp pavillion 5000', brand: 'hp', MRP: 65000, launchDate: '03-07-2020'}
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


// insert()

// printData()