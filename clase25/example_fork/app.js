const express = require('express')

const app = express()

app.get('/', (_, res) => res.send('Hola mundo!'))

app.get('/suma', (_, res) => {
    let result = 0
    for (let i = 0; i < 5e9; i++) {
        result += i
    }

    res.send(`Resultado: ${result}`)
})

app.listen(8080, () => {
    console.log('Servidor listo!')
})