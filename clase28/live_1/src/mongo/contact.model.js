const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String
})

module.exports = mongoose.model('Contact', schema, 'contacts')