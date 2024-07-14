const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: String,

    price: {
        type: Number,
        required: true,
        min: 1
    },

    stock: {
        type: Number,
        required: true,
        min: 0
    }
})

module.exports = mongoose.model('Product', schema, 'products')