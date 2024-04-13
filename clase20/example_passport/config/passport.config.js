const passport = require('passport')
const { Strategy } = require('passport-local')
const User = require('../models/user.model')
const { createHash, isValidPassword } = require('../utils/hashing')

const initializeStrategy = () => {

    // estrategia para el registro de usuarios
    passport.use('register', new Strategy({
        passReqToCallback: true, // habilitar el parámetro "req" en el callback de abajo
        usernameField: 'email'
    }, async (req, username, password, done) => {

        const { firstName, lastName, age, email } = req.body

        try {
            const user = await User.findOne({ email: username })
            if (user) {
                console.log('User already exists!')

                // null como 1er argumento, ya que no hubo error
                // false en el 2do argumento, indicando que no se pudo registrar
                return done(null, false)
            }

            const newUser = {
                firstName,
                lastName,
                age: +age,
                email,
                password: createHash(password)
            }
            const result = await User.create(newUser)

            // registro exitoso
            return done(null, result)
        }
        catch (err) {
            done(err)
        }

    }))

    // al registrar o hacer login del usuario, pasamos el modelo de user al callback done
    // passport necesita serializar este modelo, para guardar una referencia al usuario en la sesión
    // simplemente podemos usar su id
    passport.serializeUser((user, done) => {
        console.log('serialized!', user)
        done(null, user._id)
    })

    // para restaurar al usuario desde la sesión, passport utiliza el valor serializado y vuelve a generar al user
    // el cual colocará en req.user para que nosotros podamos usar
    passport.deserializeUser(async (id, done) => {
        console.log('deserialized!', id)
        const user = await User.findById(id)
        done(null, user)
    })

    passport.use('login', new Strategy({
        usernameField: 'email'
    }, async (username, password, done) => {
        try {
            const user = await User.findOne({ email: username })
            if (!user) {
                console.log('User not found!')
                return done(null, false)
            }

            if (!isValidPassword(user, password)) {
                return done(null, false)
            }

            return done(null, user)
        }
        catch (err) {
            done(err)
        }
    }))
}

module.exports = initializeStrategy