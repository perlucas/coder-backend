const { Router } = require('express')
const User = require('../models/user.model')
const { userIsLoggedIn, userIsNotLoggedIn } = require('../middlewares/auth.middleware')

const router = Router()

router.get('/', (req, res) => {
    const isLoggedIn = ![null, undefined].includes(req.session.user)

    res.render('index', {
        title: 'Home',
        isLoggedIn,
        isNotLoggedIn: !isLoggedIn,
    })
})

router.get('/login', userIsNotLoggedIn, (_, res) => {
    res.render('login', {
        title: 'Login'
    })
})

router.get('/register', userIsNotLoggedIn, (_, res) => {
    res.render('register', {
        title: 'Register'
    })
})

router.get('/profile', userIsLoggedIn, async (req, res) => {
    const idFromSession = req.session.user._id

    const user = await User.findOne({ _id: idFromSession })

    res.render('profile', {
        title: 'My profile',
        user: {
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            email: user.email
        }
    })
})

module.exports = router