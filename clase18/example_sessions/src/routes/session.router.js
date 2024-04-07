const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    if (req.session.counter) {
        req.session.counter++
        res.send(`Se ha visitado el sitio ${req.session.counter} veces`)
    }
    else {
        req.session.counter = 1
        res.send('Bienvenido!')
    }
})

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (!err) {
            return res.send('Sesión eliminada!')
        }
        res.send({ status: 'error', err })
    })
})

router.get('/login', (req, res) => {
    const { username, password } = req.query

    if (username !== 'peter' || password !== 'parker') {
        return res.send('login failed!')
    }

    req.session.user = username
    req.session.admin = true
    res.send('login succeeded!')
})

module.exports = router