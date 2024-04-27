const express = require('express')
const SessionRouter = require('./routes/session')

const app = express()

const UsersRouter = require('./routes/users')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const usersRouter = new UsersRouter()
app.use('/api/users', usersRouter.getRouter())

const sessionRouter = new SessionRouter()
app.use('/api/sessions', sessionRouter.getRouter())

app.listen(8080, () => {
    console.log('Servidor listo!')
})