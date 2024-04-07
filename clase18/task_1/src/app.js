const express = require('express')
const handlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(`${__dirname}/public`))

app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')

app.use(cookieParser())

app.use('/', require('./routes/views.router'))

app.use('/cookies', require('./routes/cookies.router'))


app.listen(8080, () => {
    console.log('Servidor listo!')
})
