const express = require('express')
const handlebars = require('express-handlebars')
const { Server } = require('socket.io')

const viewsRouter = require('./routes/views.router')

const app = express()

// configurar handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')

app.use(express.static(`${__dirname}/../public`))

// permitir envío de información mediante formularios y JSON
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', viewsRouter)

const httpServer = app.listen(8080, () => {
    console.log('Servidor listo!')
})

// creando un servidor para WS
const io = new Server(httpServer)

io.on('connection', (clientSocket) => {

    // cuando llegue un mensaje, enviárselo a todos los usuarios
    clientSocket.on('message', (data) => {
        io.emit('message', data)
    })

})
