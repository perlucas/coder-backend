const { Router } = require('express')
const User = require('../hands_on_boilerplate/src/models/user.model')
const { createHashedValue } = require('../hands_on_boilerplate/src/utils/hashing')

const router = Router()

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    // 1. verificar que el usuario exista en la BD
    const user = await User.findOne({ email: email, password: createHashedValue(password) })
    if (!user) {
        return res.status(400).send('Invalid email or password!')
    }

    // 2. crear nueva sesión si el usuario existe
    req.session.user = { id: user._id.toString(), email: user.email }
    res.redirect('/')
})

router.post('/register', async (req, res) => {
    const { firstName, lastName, email, age, password } = req.body

    try {
        await User.create({
            firstName,
            lastName,
            age: +age,
            email,
            password: createHashedValue(password)
        })

        res.redirect('/')
    }
    catch (err) {
        console.log(err)
        res.status(400).send('Error creating user!')
    }
})

module.exports = router