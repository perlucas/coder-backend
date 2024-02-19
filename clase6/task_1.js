const express = require('express') // importamos el módulo de terceros, express

const app = express() // creamos una instancia

app.get('/saludo', (req, res) => {
    res.send('Hola desde Express!')
})

app.get('/bienvenida', (req, res) => {
    // res.setHeader('Content-Type', 'text/html') // no necesaria, pero recomendada
    res.send('<p style=\'color: blue\'>Hola en azul!</p>')
})

app.get('/usuario', (req, res) => {
    // forma larga
    // res.setHeader('Content-Type', 'application/json')
    // res.send(JSON.stringify({ name:'John', lastname: 'Doe' }))

    // forma corta
    res.json({
        name: 'John',
        lastname: 'Doe',
        age: 30,
        email: 'john_doe@gmail.com'
    })
})

app.listen(8080, () => {
    console.log('Servidor listo!')
})