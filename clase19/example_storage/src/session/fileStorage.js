const session = require('express-session')
const defaultOptions = require('./defaultOptions')
const FileStore = require('session-file-store')

const storage = FileStore(session)

module.exports = session({
    store: new storage({
        path: `${__dirname}/file-sessions`,
        ttl: 100, // la sesión durará 100 segundos, luego expirará si no se refresca
        retries: 1
    }),

    ...defaultOptions
})