const mongoose = require('mongoose')

const dbAddress = 'mongodb://localhost:27017/products';
const collectionName = 'kitchens';

const Connectivity = async()=>{   //database connectivity 
    await mongoose.connect(dbAddress);
}
Connectivity() // call function of database connectivity


// Schema of the collection or Object or filter
const ProductSchema = () =>{
    const ProductSchema =  new mongoose.Schema({
        name : String,
        iWgh : Number,
        iQt : Number,
        price :Number,
        brand: String,
    })
    return ProductSchema;
}


// insert/Create function or 
const  insert = async ()=>{
    const Product = mongoose.model(collectionName, ProductSchema());
    let data = new Product({name:'Tava', iWgh: 4500, iQt : 1, price: 1700, brand: "prestiage"}) // new Product it inserting
    let result = await data.save();

    console.log(result);
} 

// update function 
const updateData= async()=>{
    const Product = mongoose.model(collectionName, ProductSchema());
    let data = await Product.updateOne(
        {name: "hero" },

        {
            $set: {iWgh: 600, name: "TAVA"}
        }
    )
    console.log(data);
}

// DeleteData object from database  /objects => deleteMany
const deleteData = async()=>{
    const productInfo = mongoose.model(collectionName, ProductSchema());
    let result  = await productInfo.deleteOne(
        {name: 'suraj'}
    );
    console.log(result)
}

const FindInDB = async()=>{
    const products = mongoose.model(collectionName, ProductSchema());
    const data = await products.find();
    console.log(data);
}

// insert()
// updateData()
// deleteData()
FindInDB()