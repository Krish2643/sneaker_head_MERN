const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    img:{
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    prevPrice: {
        type: String, 
        required: true 
    },
    price: {
        type: String, 
        required: true 
    },
    company: {
        type: String, 
        required: true 
    },
    category: {
        type: String, 
        required: true 
    }
    
})

module.exports = mongoose.model('sneakers', ProductSchema);