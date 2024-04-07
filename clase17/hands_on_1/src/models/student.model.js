const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

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

schema.plugin(mongoosePaginate)

module.exports = mongoose.model('Student', schema, 'students')