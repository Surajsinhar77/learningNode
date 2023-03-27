// const {MongoClient} = require('mongodb');

// const url = 'mongodb://localhost:27017'; // this is url or path of mongodb
// const databaseName = 'products'
// const client = new MongoClient(url);
// const collectionName = 'kitchen';

// async function getData(){
//     let resultData = await client.connect()
//     const databaseInfo = resultData.db(databaseName);
//     return databaseInfo.collection(collectionName);
// }
const getData  = require('./mongoConnection')

// const  main =()=>{
//     getData().then((res, rej)=>{
//         if(rej){
//             console.log("error", rej)
//         }
//         res.find().toArray().then((data)=>{
//             console.log(data)
//         })
//     })
// }

// async await to deal with promises
const main = async ()=>{
    let data = await getData();
    data = await data.find().toArray();
    // console.log(data)
    return data;
} 

module.exports =  main;
// main();

