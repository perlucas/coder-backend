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

// escuchamos al evento "cliente conectado"
socketServer.on('connection', socket => {
    console.log(`Nuevo cliente conectado: ${socket.id}`)

    // escuchamos los mensajes que nos lleguen desde el cliente al canal 'message'
    socket.on('message', data => {
        console.log(data)
    })

    // socket.emit permite enviar un mensaje sólo al cliente actual
    socket.emit('individual', 'Mensaje individual!')
    
    // socketServer.emit permite enviar un mensaje a todos los clientes conectados
    socketServer.emit('all', 'Mensaje para todos!')
    
    // socket.broadcast.emit permite enviar un mensaje a todos los clientes, menos el actual
    socket.broadcast.emit('group', 'Mensaje para todos, menos el socket actual!')
})
