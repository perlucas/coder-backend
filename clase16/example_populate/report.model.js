const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    grades: [
        {
            course: String,
            rank: Number
        }
    ],
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }
})

module.exports = mongoose.model('Report', schema, 'reports')