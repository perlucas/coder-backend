const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
const { secret } = require('../utils/jwt')

// TODO: implementar extractor
const cookieExtractor = req => null

const initializeStrategy = () => {

    // TODO: implementar estrategia
}

module.exports = initializeStrategy