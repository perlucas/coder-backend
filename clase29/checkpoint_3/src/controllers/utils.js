const express = require('express')

/**
 * 
 * @type {express.RequestHandler}
 */
const configureCustomResponses = (req, res, next) => {
    res.sendSuccess = (payload, code = 200) => res.status(code).json({ status: 'success', payload })
    res.sendError = (payload, code = 500) => res.status(code).json({ status: 'error', payload })
    next()
}

module.exports = { configureCustomResponses }