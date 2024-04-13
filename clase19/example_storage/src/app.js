const express = require('express')
const cookieParser = require('cookie-parser')

// const sessionMiddleware = require('./session/memoryStorage')
// const sessionMiddleware = require('./session/fileStorage')
const sessionMiddleware = require('./session/mongoStorage')

const app = express()

app.use(cookieParser())
app.use(sessionMiddleware)

app.get('/', (req, res) => {

    if (req.session.counter) {
        req.session.counter++
        return res.send(`Esta es su visita nro. ${req.session.counter}`)
    }

    req.session.counter = 1
    res.send('Bienvenido! Esta es su primer visita!')
})


app.listen(8080, () => {
    console.log('Servidor listo!')
})