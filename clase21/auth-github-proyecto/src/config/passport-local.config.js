const passport = require('passport')
const { Strategy } = require('passport-local')
const User = require('../models/user.model')
const hashingUtils = require('../utils/hashing')

const initializeStrategy = () => {

    passport.use('register', new Strategy({
        passReqToCallback: true,
        usernameField: 'email'
    }, async (req, username, password, done) => {

        const { firstName, lastName, age, email } = req.body

        try {
            const user = await User.findOne({ email: username })
            if (user) {
                // error, usuario con ese email ya existe
                return done(null, false)
            }

            const newUser = {
                firstName,
                lastName,
                age: +age,
                email,
                password: hashingUtils.hashPassword(password)
            }
            const result = await User.create(newUser)

            // usuario nuevo creado exitosamente
            return done(null, result)
        } catch (err) {

            // error inesperado!
            done(err)
        }
    }))

    passport.use('login', new Strategy({
        usernameField: 'email'
    }, async (username, password, done) => {
        try {

            if (!username || !password) {
                return done(null, false)
            }

            // 1. verificar que el usuario exista en la BD
            const user = await User.findOne({ email: username })
            if (!user) {
                return done(null, false)
            }

            // 2. validar su password
            if (!hashingUtils.isValidPassword(password, user.password)) {
                return done(null, false)
            }

            return done(null, user)
        } catch (err) {
            done(err)
        }
    }))

    passport.serializeUser((user, done) => {
        console.log('serialized!', user)
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        console.log('deserialized!', id)
        const user = await User.findById(id)
        done(null, user)
    })
}

module.exports = initializeStrategy