// const { MemoryDAO: ContactsDAO } = require('./memory')
const { MongoDAO: ContactsDAO } = require('./mongo')

const createDAO = async () => {
    const dao = new ContactsDAO()
    await dao.init()
    return dao
}

module.exports = { createDAO }