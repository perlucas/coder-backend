const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: String,
    topics: [String],
    professor: String
})

module.exports = mongoose.model('Course', schema, 'courses')