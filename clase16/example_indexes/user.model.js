const mongoose = require('mongoose')

const schema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    lastName: {
        type: String
    },

    age: {
        type: Number,
        required: true,
        index: true
    }
})

module.exports = mongoose.model('User', schema, 'users')