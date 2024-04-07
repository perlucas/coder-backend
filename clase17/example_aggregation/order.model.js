const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,

    size: {
        type: String,
        enum: ['small', 'medium', 'large'],
        default: 'medium'
    },

    price: Number,

    quantity: Number,

    date: Date
})

module.exports = mongoose.model('Order', schema, 'orders')