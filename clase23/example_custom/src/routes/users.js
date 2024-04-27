const Router = require('./router')

class UsersRouter extends Router {
    init() {
        this.get('/', (req, res) => {
            res.send('Hola desde /users')
        })
    }
}

module.exports = UsersRouter