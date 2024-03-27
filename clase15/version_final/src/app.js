const express = require('express')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')

const FilesUserManager = require('./dao/fileManagers/userManager')
const DbUserManager = require('./dao/dbManagers/userManager')

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

    await mongoose.connect('mongodb://localhost:27017', {
        dbName: 'practica'
    })

    const userManager = new DbUserManager()
    await userManager.prepare()
    app.set('userManager', userManager)

    app.listen(8080, () => {
        console.log('Servidor listo!')
    })
}

main()