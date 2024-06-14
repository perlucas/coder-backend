const express = require('express')
const mongoose = require('mongoose')
const compression = require('express-compression')

const { mongoUri, dbName } = require('./config')

const newsRouter = require('./routes/news.router')

const app = express()

app.use(compression({
    brotli: { enabled:true, zlib: {} }
}))

app.use(express.json())

app.use(express.static(`${__dirname}/public`))

app.use('/api/v1/news', newsRouter)

const main = async () => {
    await mongoose.connect(mongoUri, { dbName })

    app.listen(8080, () => console.log('Servidor listo!'))
}

main()