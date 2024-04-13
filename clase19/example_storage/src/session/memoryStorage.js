const session = require('express-session')
const defaultOptions = require('./defaultOptions')

module.exports = session({
    ...defaultOptions
})