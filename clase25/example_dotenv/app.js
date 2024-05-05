const express = require('express')
const config = require('./config')

console.log(config)

const app = express()

app.get('/', (_, res) => res.send('Hola mundo!'))

app.listen(config.PORT, () => {
    console.log('Servidor listo!')
})