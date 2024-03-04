const express = require('express')
const handlebars = require('express-handlebars')
const { Server } = require('socket.io')
const viewsRouter = require('./routes/views.router')

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

const httpServer = app.listen(8080, () => {
    console.log('Servidor listo!')
})

// creamos un servidor para WS desde el servidor HTTP que nos da express
const socketServer = new Server(httpServer)

const messages = []


// escuchamos al evento "cliente conectado"
socketServer.on('connection', socket => {
    console.log(`Nuevo cliente conectado: ${socket.id}`)

    // enviar todos los mensajes existentes al cliente cuando se conecte la 1era vez
    for (const m of messages) {
        socket.emit('message', m)
    }

    socket.on('message', message => {

        // guardar mensaje nuevo
        messages.push(message)

        // notificar a todos los clientes
        socketServer.emit('message', message)
    })
})
