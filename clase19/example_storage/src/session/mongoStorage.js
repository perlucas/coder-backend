const MongoStore = require('connect-mongo')
const session = require('express-session')
const defaultOptions = require('./defaultOptions')

const storage = MongoStore.create({
    dbName: 'example-storage',
    mongoUrl: 'mongodb://localhost:27017',
    // ttl: 60
})

module.exports = session({
    store: storage,
    ...defaultOptions
})