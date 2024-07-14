const { createLogger, transports, format } = require('winston')

const requestLoggerFormat = format.combine(
    format.timestamp(),
    format.printf(({ message, timestamp }) => {
        const { ip, method, path } = message
        return `${ip} - [${timestamp}] ${method} ${path}`
    })
)

const requestLogger = createLogger({
    level: 'info',
    transports: [
        new transports.File({
            filename: `${__dirname}/../logs/access.log`,
            format: requestLoggerFormat
        })
    ]
})

const errorLogger = createLogger({
    level: 'error',
    format: format.combine(
        format.timestamp(),
        format.errors()
    ),
    transports: [
        new transports.Http({
            host: 'localhost',
            path: '/logs',
            port: 8100
        })
    ]
})

module.exports = {
    /**
     * 
     * @type import('express').RequestHandler
     */
    accessLog: (req, res, next) => {
        requestLogger.info({
            ip: req.ip,
            method: req.method.toUpperCase(),
            path: req.path
        })
        next()
    },

    errorLogger
}