const express = require('express')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')

app.use('/', require('./routes/views.router'))

const main = async () => {
    await await mongoose.connect('mongodb://localhost:27017', {
        dbName: 'students'
    })

    app.listen(8080, () => {
        console.log('Servidor listo!')
    })
}

main()
