const express = require('express')

const productsRouter = require('./routes/products.router')
const ordersRouter = require('./routes/orders.router')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.use('/api/products', productsRouter)
app.use('/api/orders', ordersRouter)

const bootstrap = async () => {
    await mongoose.connect(process.env.MONGO_URI, { dbName: process.env.DB_NAME })

    app.listen(8080, () => console.log('Servidor listo!'))
}

bootstrap()