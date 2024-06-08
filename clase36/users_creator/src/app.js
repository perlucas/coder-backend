const express = require('express')
const mongoose = require('mongoose')
const { mongoUri, dbName } = require('./config')
const usersRouter = require('./routes/users.router')

const app = express()

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

const main = async () => {
    await mongoose.connect(mongoUri, { dbName })

    app.use('/api/users', usersRouter)

    app.listen(8080, () => console.log('Servidor listo!'))
}

main()