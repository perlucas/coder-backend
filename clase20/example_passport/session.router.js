const { Router } = require('express')
const passport = require('passport')

const router = Router()

router.post('/login', passport.authenticate('login', { failureRedirect: '/api/sessions/faillogin' }), (req, res) => {
    console.log(req.body)
    req.session.user = {
        id: req.user._id,
        email: req.user.email
    }

    // no es necesario validar el login aquí, ya lo hace passport!
    res.redirect('/')
})

router.get('/faillogin', (req, res) => {
    res.send({ status: 'error', message: 'Login failed!' })
})

// agregamos el middleware de passport para el register
router.post('/register', passport.authenticate('register', { failureRedirect: '/api/sessions/failregister' }), (req, res) => {
    console.log(req.body)
    // no es necesario registrar el usuario aquí, ya lo hacemos en la estrategia!
    res.redirect('/')
})

router.get('/failregister', (req, res) => {
    res.send({ status: 'error', message: 'Register failed!' })
})

module.exports = router