const getData = require('./mongoConnection');
const main = require('./index');

const updateData = async ()=>{

    console.log(typeof(databaseData))
    let data = await getData();
    let result = await data.updateOne(
        {name: 'm30'},
        {$set: {name: 'm40'}}
    )
    console.log(result);
    if(result.acknowledged){
        console.log(result.matchedCount)
    }
}

// updateData()