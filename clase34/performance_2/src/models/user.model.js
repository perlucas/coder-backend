const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },
    
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('User', schema, 'users')