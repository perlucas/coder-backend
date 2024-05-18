const express = require('express')

// routers, cada archivo es una función que devuelve un router
const usersRouter = require('./routes/users.router')
const ordersRouter = require('./routes/orders.router')
const businessRouter = require('./routes/business.router')

const app = express()
app.use(express.json())

const main = async () => {

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