const express = require('express')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')

const { dbName, mongoUrl } = require('./dbConfig')
const sessionMiddleware = require('./session/mongoStorage')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(sessionMiddleware)

app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')

app.use('/api/sessions', require('./routes/session.router'))
app.use('/', require('./routes/views.router'))

mongoose.connect(mongoUrl, { dbName })
    .then(() => {
        app.listen(8080, () => {
            console.log('Servidor listo!')
        })
    })
