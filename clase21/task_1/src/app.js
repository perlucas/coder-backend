const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user.model')

const { dbName, mongoUrl } = require('./dbConfig')
const { isValidPassword, hashPassword } = require('./utils/hashing')
const { generateToken, verifyToken } = require('./utils/jwt')

const app = express()

app.use(express.static(`${__dirname}/public`))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/api/register', async (req, res) => {
    try {
        const { firstName, lastName, age, email, password } = req.body

        await User.create({
            firstName,
            lastName,
            age: +age,
            email,
            password: hashPassword(password)
        })

        return res.status(201).json({ status: 'success' })

    } catch (err) {
        return res.status(400).json({ error: err })
    }
})

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

app.get('/api/users/current', verifyToken, async (req, res) => {
    const { id } = req.authUser
    const user = await User.findById(id)

    return res.status(200).json({
        user: {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age
        }
    })
})

app.get('/', (req, res) => {
    res
        .setHeader('Content-Type', 'text/html')
        .send(`<body>
    <div id='content'></div>
    <script src='/js/index.js'></script>
    </body>`)
})

app.get('/login', (req, res) => {
    res
        .setHeader('Content-Type', 'text/html')
        .send(`<body>
    <div>
        <form id='loginForm' action="/api/login" method="post" enctype="application/x-www-form-urlencoded">
            <label for="_email">Email:</label>
            <input type="email" name="email" id="_email" />

            <label for="_pass">Password:</label>
            <input type="password" name="password" id="_pass"/>

            <button type="submit">Login</button>
        </form>
    </div>
    <script src='/js/login.js'></script>
    </body>`)
})

mongoose.connect(mongoUrl, { dbName })
    .then(() => {
        app.listen(8080, () => {
            console.log('Servidor listo!')
        })
    })
