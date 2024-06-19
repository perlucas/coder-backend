const express = require('express')
const helmet = require('helmet')

const app = express()

app.use(helmet())

app.get('/', (_, res) => res.send('Hola Mundo!'))

app.listen(8080, () => console.log('Servidor listo!'))