const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    products: [],

    totalPrice: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Order', schema, 'orders')