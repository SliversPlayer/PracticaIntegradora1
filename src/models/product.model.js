import mongoose from 'mongoose';

const productsCollection = "products"

const productsSchema = new mongoose.Schema({
    title: {type: String, requiered:true, max: 100},
    description: {type: String, requiered:true, max: 100},
    price: {type: Number, requiered:true},
    category: {type: String, requiered:true, max: 100},
    code: {type: String, requiered:true, max: 100, unique: true},
    stock: {type: String, requiered:true, max: 50}
})

const productModel=mongoose.model(productsCollection, productsSchema)

export default productModel