const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017'; // this is url or path of mongodb
const databaseName = 'products'
const client = new MongoClient(url);
const collectionName = 'kitchen';


// this is how to connect to database 
async function getData(){
    let resultData = await client.connect()
    const databaseInfo = resultData.db(databaseName);
    return databaseInfo.collection(collectionName);
}

module.exports = getData; // antother way to export