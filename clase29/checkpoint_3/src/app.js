const express = require('express')
const mongoose = require('mongoose')

const { mongoUri, dbName } = require('./config')
const { configureCustomResponses } = require('./controllers/utils')

// routers, cada archivo es una función que devuelve un router
const usersRouter = require('./routes/users.router')
const ordersRouter = require('./routes/orders.router')
const businessRouter = require('./routes/business.router')

const app = express()
app.use(express.json())

const main = async () => {

    await mongoose.connect(mongoUri, { dbName })

    // configurar custom responses
    app.use(configureCustomResponses)

    // configurar rutas de nuestro backend
    const routers = [
        { path: '/api/users', router: usersRouter },
        { path: '/api/orders', router: ordersRouter },
        { path: '/api/business', router: businessRouter }
    ]

    for (const { path, router } of routers) {
        app.use(path, await router())
    }

    // levantar el servidor
    const port = process.env.PORT || 8080
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
}

main()