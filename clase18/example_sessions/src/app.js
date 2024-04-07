const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({
    secret: 'adasd127812be',
    resave: true,
    saveUninitialized: true
}))

app.use('/session', require('./routes/session.router.js'))

const authMiddleware = (req, res, next) => {
    if (!req.session.admin) {
        return res.status(401).send('Unauthorized!')
    }

    next()
}

app.get('/admin', authMiddleware, (req, res) => {
    res.send('Admin page')
})

app.listen(8080, () => {
    console.log('Servidor listo!')
})