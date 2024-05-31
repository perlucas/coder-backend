const express = require('express')
const { useLogger } = require('./logger')

const app = express()
app.use(express.json())

app.use(useLogger)

app.use('/', (req, res) => {
    req.logger.warn('Alerta!')
    res.send('Hola mundo!')
})

app.listen(8080, () => {
    console.log('Servidor listo!')
})