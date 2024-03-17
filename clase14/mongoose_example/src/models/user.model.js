const mongoose = require('mongoose')

const collection = 'users'

const schema = new mongoose.Schema({

    // indicamos a mongoose que nuestros documentos 'user' tendrán un campo firstName del tipo string
    firstName: String,

    lastName: String,

    // indicamos a mongoose que no permita crear 2 usuarios con el mismo email
    email: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model(collection, schema)