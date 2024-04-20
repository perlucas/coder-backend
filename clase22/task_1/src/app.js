const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const User = require('./models/user.model')

const { dbName, mongoUrl } = require('./dbConfig')

const { generateToken } = require('./utils/jwt')
const { isValidPassword } = require('./utils/hashing')

const app = express()

app.use(express.static(`${__dirname}/public`))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

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
    
    // TODO: colocar el token en las cookies

    res.status(200).json({ status: 'success' })
})

mongoose.connect(mongoUrl, { dbName })
    .then(() => {
        app.listen(8080, () => {
            console.log('Servidor listo!')
        })
    })
