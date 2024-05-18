const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    number: Number,
    products: [],
    totalPrice: Number,
    status: String,
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Order', schema, 'orders')