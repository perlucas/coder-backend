const passport = require('passport')

const passportMiddleware = strategy => {
    return async (req, res, next) => {
        const passportAuthenticateMiddleware = passport.authenticate(strategy, function (err, user, info) {

            if (err) {
                return next(err)
            }

            if (!user) {
                return res.status(401).send({
                    error: info && info.message ? info.message : info.toString()
                })
            }

            req.user = user
            next()
        })

        passportAuthenticateMiddleware(req, res, next)
    }
}

module.exports = passportMiddleware