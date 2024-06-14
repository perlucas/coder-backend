const mongoose = require('mongoose')

const schema = new mongoose.Schema({

    title: String,

    description: String,

    url: String

})

module.exports = mongoose.model('News', schema, 'news')