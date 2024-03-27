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
        required: true
    },

    genre: {
        type: String,
        required: true,
        enum: ['M', 'H']
    },

    role: {
        type: String,
        required: true,
        default: 'user'
    }
})

schema.virtual('id').get(function() {
    return this._id.toString()
})

module.exports = mongoose.model('User', schema, 'users')