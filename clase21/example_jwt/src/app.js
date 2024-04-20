const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user.model')

const { dbName, mongoUrl } = require('./dbConfig')
const { isValidPassword } = require('./utils/hashing')
const { generateToken, verifyToken } = require('./utils/jwt')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
        return res.status(400).json({ error: 'User not found!' })
    }

    if (!isValidPassword(password, user.password)) {
        return res.status(401).json({ error: 'Invalid password' })
    }

    const credentials = { id: user._id.toString(), email: user.email }
    const accessToken = generateToken(credentials)
    res.status(200).json({ accessToken })
})

app.get('/api/private', verifyToken, (req, res) => {
    const { email } = req.authUser
    res.send(`Welcome ${email}, this is private and protected content`)
})

mongoose.connect(mongoUrl, { dbName })
    .then(() => {
        app.listen(8080, () => {
            console.log('Servidor listo!')
        })
    })
