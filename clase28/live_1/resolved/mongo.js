const mongoose = require('mongoose')
const { dbName, mongoUri } = require('../../config')
const ContactModel = require('../../mongo/contact.model')

class MongoDAO {
    constructor() { }

    async init() {
        await mongoose.connect(mongoUri, { dbName })
        // this.contacts = [
        //     { id: 1, firstName: 'Michael', lastName: 'Jordan', phone: '+1 999 88888777' },
        //     { id: 2, firstName: 'Alejandro', lastName: 'Saenz', phone: '+1 999 88888776' },
        //     { id: 3, firstName: 'Ariana', lastName: 'Grande', phone: '+1 999 88888775' }
        // ]
    }

    async getAll() {
        const docs = await ContactModel.find()
        return docs.map(d => d.toJSON())
    }
}

module.exports = { MongoDAO }