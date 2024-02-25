const usersRouter = require('./routes/users.router')
const petsRouter = require('./routes/pets.router')
const express = require('express')

const app = express()

// express.static es una función de la librería express, que básicamente funciona como un middleware
// aquí le estamos indicando que los archivos de la carpeta public deben ser expuestos para que podamos obtenerlos desde el servidor mediante 
// requests GET al endpoint /. Ej.: si tenemos un archivo imagen.jpg, podemos verla desde localhost:8080/imagen.jpg
// para evitar problemas con la ubicación de la carpeta, utilizamos la variable especial __dirname, la cual contiene la dirección hacia la carpeta que contiene al archivo de js actual.
app.use(express.static(`${__dirname}/../public`))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)

app.listen(8080, () => {
    console.log('Servidor listo!')
})