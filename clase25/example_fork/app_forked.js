const express = require('express')
const { fork } = require('child_process')

const app = express()

app.get('/', (_, res) => res.send('Hola mundo!'))

app.get('/suma', (_, res) => {
    // creamos un child process, indicando cuál es el script que debe ejecutar, como si hiciéramos node child.js
    const child = fork(`${__dirname}/child.js`)

    // le enviamos un mensaje al proceso
    child.send('Iniciar tarea!')

    // recibimos un mensaje del proceso
    child.on('message', (result) => {
        res.send(`Resultado: ${result}`)
    })
})

app.listen(8080, () => {
    console.log('Servidor listo!')
})