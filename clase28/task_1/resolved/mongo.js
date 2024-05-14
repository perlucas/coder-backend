const mongoose = require('mongoose')
const { dbName, mongoUri } = require('../../config')
const ContactModel = require('../../mongo/contact.model')

class MongoDAO {
    constructor() { }

    async init() {
        await mongoose.connect(mongoUri, { dbName })
    }

    async getAll() {
        const docs = await ContactModel.find()
        return docs.map(d => d.toJSON())
    }

    async createContact(contact) {
        const newContact = await ContactModel.create(contact)
        return newContact.toJSON()
    }
}

module.exports = { MongoDAO }