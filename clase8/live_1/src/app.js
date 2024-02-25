const usersRouter = require('./routes/users.router')
const petsRouter = require('./routes/pets.router')
const express = require('express')

const app = express() // creamos una instancia

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// los routers no contienen información del path "users" o "pets"
// eso es lo que estamos configurando aquí. Le indicamos a express que las rutas definidas en el router 
// usersRouter, deberán conectarse al endpoint /api/users. Por detrás, express concatena /api/users con las rutas
// definidas en usersTouter (osea, la ruta /). Esto nos darála ruta /api/users/, que es lo mismo que /api/users
app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)

app.listen(8080, () => {
    console.log('Servidor listo!')
})