const { Router } = require('express')
const User = require('../models/user.model')
const { hashPassword, isValidPassword } = require('../utils/hashing')

const router = Router()

router.post('/login', async (req, res) => {
    console.log(req.body)

    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ error: 'Invalid credentials!' })
    }

    // 1. verificar que el usuario exista en la BD
    const user = await User.findOne({ email, })
    if (!user) {
        return res.status(401).json({ error: 'User not found!' })
    }

    // 2. validar su password
    if (!isValidPassword(password, user.password)) {
        return res.status(401).json({ error: 'Invalid password!' })
    }

    // 3. crear nueva sesión si el usuario existe
    req.session.user = { email, _id: user._id.toString() }
    res.redirect('/')
})

router.get('/logout', (req, res) => {
    req.session.destroy(_ => {
        res.redirect('/')
    })
})

router.post('/register', async (req, res) => {
    console.log(req.body)
    
    try {
        const { firstName, lastName, age, email, password } = req.body

        const user = await User.create({
            firstName,
            lastName,
            age: +age,
            email,
            password: hashPassword(password)
        })

        req.session.user = { email, _id: user._id.toString() }
        res.redirect('/')

    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

module.exports = router