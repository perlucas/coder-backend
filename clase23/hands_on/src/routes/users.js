const { PUBLIC, USER, ADMIN, USER_PREMIUM } = require('./policies.constants')
const Router = require('./router')

class UsersRouter extends Router {
    init() {
        this.get('/', [PUBLIC], (req, res) => {
            res.send('Hola desde /users')
        })

        this.get('/private', [USER], (req, res) => {
            res.send('Hola desde /users/private')
        })

        this.get('/current', [USER, USER_PREMIUM], (req, res) => {
            res.send(req.user)
        })

        this.get('/admin', [ADMIN], (req, res) => {
            res.send('Hola desde /users/private')
        })
    }
}

module.exports = UsersRouter