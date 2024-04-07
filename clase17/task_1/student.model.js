const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,

    gender: {
        type: String,
        enum: ['M', 'F']
    },

    group: String,
    grade: Number
})

module.exports = mongoose.model('Student', schema, 'students')