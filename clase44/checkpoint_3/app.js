const express = require('express')

const productsRouter = require('./routes/products.router')
const ordersRouter = require('./routes/orders.router')
const mongoose = require('mongoose')
const { accessLog } = require('./logger')
const swaggerJSDoc = require('swagger-jsdoc')
const { serve, setup } = require('swagger-ui-express')

const app = express()

app.use(express.json())

app.use(accessLog)

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Adoptme API',
            description: 'API for pets adoption!'
        },
    },
    apis: [`${__dirname}/docs/**/*.yaml`]
}
const specs = swaggerJSDoc(swaggerOptions)
app.use('/apidocs', serve, setup(specs))

app.use('/api/products', productsRouter)
app.use('/api/orders', ordersRouter)

const bootstrap = async () => {
    await mongoose.connect(process.env.MONGO_URI, { dbName: process.env.DB_NAME })

    return app
}

module.exports = { bootstrap }