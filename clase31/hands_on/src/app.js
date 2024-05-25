const express = require('express')
const usersRouter = require('./routes/users.router')

const app = express()
app.use(express.json())

app.use('/api/users', usersRouter)

app.listen(8080, () => {
    console.log('Servidor listo!')
})