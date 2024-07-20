const express = require('express')
const cors = require('cors')

const paymentsRouter = require('./routes/payments.router')

const app = express()

app.use(cors())

app.use('/api/payments', paymentsRouter)

app.listen(8080, () => console.log('Servidor listo!'))