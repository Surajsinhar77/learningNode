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

const update = async(mainData,toCheck)=>{
    const data = await getData();
    const result = await data.updateOne(
        {name:toCheck},
        {$set: mainData}
    )
    // console.log(result);
    // if(result.acknowledged){
    //     console.log(result.matchedCount)
    // }
    return result;
}
// updateData()

module.exports = update;