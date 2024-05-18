const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    products: []
})

module.exports = mongoose.model('Business', schema, 'businesses')