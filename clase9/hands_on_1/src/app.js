const express = require('express')
const handlebars = require('express-handlebars')
const viewsRouter = require('./routes/views.router')

const app = express()

// configuramos handlebars como nuestro template engine por defecto
// esto nos permitirá poder utilizarlo con el método res.render()
app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')

app.use(express.static(`${__dirname}/../public`))

app.use('/', viewsRouter)

app.listen(8080, () => {
    console.log('Servidor listo!')
})