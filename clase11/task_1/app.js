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

const messageLogs = []

io.on('connection', (clientSocket) => {

    // cuando un cliente se haya conectado, enviarle todos los mensajes automáticamente
    for (const m of messageLogs) {
        clientSocket.emit('message', m)
    }

    // cuando llegue un mensaje, enviárselo a todos los usuarios
    clientSocket.on('message', (data) => {
        messageLogs.push(data)
        io.emit('message', data)
    })

    // notificación de que un usuario nuevo se unió
    clientSocket.on('user-joined', (user) => {
        clientSocket.broadcast.emit('user-joined', user)
    })
})
