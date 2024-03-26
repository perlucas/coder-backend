const express = require('express')
const handlebars = require('express-handlebars')
const UserManager = require('./dao/fileManagers/userManager')

const app = express()

const viewsRouter = require('./routes/views.router')
const usersRouter = require('./routes/users.router')

// configurar handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')

app.use(express.static(`${__dirname}/public`))
app.use(express.json())

app.use('/', viewsRouter)
app.use('/api/users', usersRouter)

const main = async () => {

    const userManager = new UserManager(`${__dirname}/users.json`)
    await userManager.prepare()
    app.set('userManager', userManager)

    app.listen(8080, () => {
        console.log('Servidor listo!')
    })
}

main()