const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    const isLoggedIn = ![null, undefined].includes(req.session.user)

    res.render('index', {
        title: 'Home',
        isLoggedIn,
        isNotLoggedIn: !isLoggedIn,
    })
})

router.get('/login', (_, res) => {
    // TODO: agregar middleware, sólo se puede acceder si no está logueado
    res.render('login', {
        title: 'Login'
    })
})

router.get('/register', (_, res) => {
    // TODO: agregar middleware, sólo se puede acceder si no está logueado
    res.render('register', {
        title: 'Register'
    })
})

router.get('/profile', (_, res) => {
    // TODO: agregar middleware, sólo se puede acceder si está logueado
    // TODO: mostrar los datos del usuario actualmente loggeado, en vez de los fake
    res.render('profile', {
        title: 'My profile',
        user: {
            firstName: 'Luke',
            lastName: 'SkyWalker',
            age: 33,
            email: 'luke@gmail.com'
        }
    })
})

module.exports = router