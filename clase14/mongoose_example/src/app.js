const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users.router')

const app = express()

app.use(express.static(`${__dirname}/public`))

// permitir envío de información mediante formularios y JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/users', usersRouter)

const main = async () => {

    await mongoose.connect(
        'XXX',
        {
            dbName: 'coder'
        }
    )

    app.listen(8080, () => {
        console.log('Server up!')
    })

}

main()
