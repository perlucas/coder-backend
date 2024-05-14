const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const contactsRouter = require('./routes/contacts.router')

app.use('/api/contacts', contactsRouter)


app.listen(8080, () => {
    console.log('Servidor listo!')
})