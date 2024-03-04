const express = require('express')
const handlebars = require('express-handlebars')
const viewsRouter = require('./routes/views.router')
const usersRouter = require('./routes/users.router')

const app = express()

// configurar handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')

// permitir envío de información mediante formularios y JSON
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// setear carpeta public como estática
app.use(express.static(`${__dirname}/../public`))

app.use('/', viewsRouter)

app.use('/api/users', usersRouter)

app.listen(8080, () => {
    console.log('Servidor listo!')
})