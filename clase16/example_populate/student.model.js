const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    courses: {
        // courses es un campo que contiene un array de objetos
        // cada objeto, a su vez, tiene un campo course, que será una "referencia" a un documento de la colección "courses"
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Course' // debe matchear el nombre del modelo
                }
            }
        ],
        default: []
    }
})

// schema.pre('find', function () {
//     this.populate('courses.course')
// })

module.exports = mongoose.model('Student', schema, 'students')