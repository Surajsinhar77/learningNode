const getData = require('./mongoConnection')

const DelData = async () => {
    const theData = await getData();
    const result = await theData.deleteOne(   // you can you deleteMany also as same deleted the same name 
        {name: 'm40'}
    )
    if(result.acknowledged){
        if(result.deletedCount == 0){
            console.log("This Data is not present to delete")
        }
        console.log('Data is SuccessFull Deleted')
    }
}

// DelData()