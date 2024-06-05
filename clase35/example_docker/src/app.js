const express = require('express')
const app = express()

app.get('/basica', (req, res) => {
    let result = 0
    for (let i = 0; i < 1e6; i++) {
        result += i
    }
    res.send('result: ' + result)
})

app.get('/compleja', (req, res) => {
    let result = 0
    for (let i = 0; i < 5e8; i++) {
        result += i
    }
    res.send('result: ' + result)
})

app.listen(8080, () => {
    console.log('Servidor listo!')
})