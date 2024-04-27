const jwt = require('jsonwebtoken')
const { PUBLIC, USER } = require('./policies.constants')
const Router = require('./router')

const JWT_SECRET = 'CoderSecretClaseRouter'

class SessionRouter extends Router {
    init() {
        this.post('/login', [PUBLIC], (req, res) => {
            const accessToken = jwt.sign({ email: req.body.email, role: USER }, JWT_SECRET)
            res.status(200).send({ accessToken })
        })
    }
}

module.exports = SessionRouter