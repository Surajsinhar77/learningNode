const mongoose = require('mongoose')

const dbAddress = 'mongodb://localhost:27017/products';
const collectionName = 'kitchens';

const Connectivity = async()=>{
    await mongoose.connect(dbAddress);
}
Connectivity()

// const ProductSchema = () =>{
//     const ProductSchema =  new mongoose.Schema({
//         name : String,
//         iWgh : Number,
//         iQt : Number,
//         price :Number,
//         brand: String,
//     })
//     return ProductSchema;
// }

const  insert = async ()=>{
    const Product = mongoose.model('collectionName', ProductSchema());
    let data = new Product({name:'Tava', iWgh: 4500, iQt : 1, price: 1700, brand: "prestiage"}) // new Product it inserting
    let result = await data.save();

    console.log(result);
} 


const updateData= async()=>{
    const ProductSchema =  new mongoose.Schema({
        name : String,
        iWgh : Number,
        iQt : Number,
        price :Number,
        brand: String,
    })

    const Product = mongoose.model('collectionName', ProductSchema);
    let datfa = await Product.updateOne(
        {name: "hero" },

        {
            $set: {iWgh: 600, name: "TAVA"}
        }
    )
    console.log(data);
}


// insert()
updateData()