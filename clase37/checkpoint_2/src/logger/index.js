const winston = require('winston')

const transports = [
    new winston.transports.Console({ level: 'info' }),
    new winston.transports.File({ dirname: `${__dirname}/../../logs`, level: 'warn' })
]

const logger = winston.createLogger({
    transports
})

module.exports = { logger }