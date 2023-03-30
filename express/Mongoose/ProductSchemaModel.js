const mongoose = require("mongoose")

// Product Schema
function ElectronicItemSchema(){
    const ProductsSchema =  new mongoose.Schema({
        name: String,
        Series: String,
        ProductType: String,
        price: Number,
        OnSale:Boolean,
    });
    return ProductsSchema;
}

// Product Model
const ProductModel =()=>{
    const product = mongoose.model('ElectronicItem', ElectronicItemSchema());
    return product;
}

module.exports = ProductModel;