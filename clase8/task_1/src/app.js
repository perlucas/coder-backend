const usersRouter = require('./routes/users.router')
const petsRouter = require('./routes/pets.router')
const express = require('express') // importamos el módulo de terceros, express

const app = express() // creamos una instancia

app.use(express.static(`${__dirname}/../public`))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)

app.listen(8080, () => {
    console.log('Servidor listo!')
})