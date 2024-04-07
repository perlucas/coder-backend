const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser('i1j2h3b1i2khb310'))

app.use('/', require('../routes/cookies.router'))

app.listen(8080, () => {
    console.log('Servidor listo!')
})