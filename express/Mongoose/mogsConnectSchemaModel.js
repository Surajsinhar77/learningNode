const  mongoose = require('mongoose')

const main = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/products')// Database connectivity 

    const ProductSchema = new mongoose.Schema(  // creting a blueprint or security known as Schema
        {  // This are the validation which allows
            name : String,
            brand: String,
        }
    );

    // They is the model which use to send the data to data base afer check Schema : first data will pass through ProductSchema then if it allow the data then it will save on database 
    
    // The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural version of your model name eg:
    //Then MyModel will use the tickets collection, not the ticket collection.
                                // collection_name , Schema 
    const ProductModel = mongoose.model('kitchen', ProductSchema); 
    let data = new ProductModel({
        name:'suraj',
        brand: 'ownBrnad',
    })

    let result = await data.save();  // This is the last step which save the data which pass the schema and model
    console.log(result);
}

main();