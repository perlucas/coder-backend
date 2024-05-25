const express = require('express')
const usersRouter = require('./routes/users.router')
// const { errorHandler } = require('./services/errors/errorHandler')

const app = express()
app.use(express.json())

app.use('/api/users', usersRouter)

// app.use(errorHandler)

app.listen(8080, () => {
    console.log('Servidor listo!')
})