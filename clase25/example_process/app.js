const express = require('express')
const process = require('process')

const app = express()

app.get('/', (_, res) => res.send('Hola mundo!'))

app.get('/exit', (_, res) => {
    res.send('Servidor apagado!')

    // El método exit nos permite finalizar el proceso en ejecución.
    // Esto es básicamente matar al servidor/script en node actualmente en ejecución.
    process.exit()
})

app.listen(8080, () => {
    console.log('Servidor listo!')

    console.log({
        pid: process.pid, // process ID, es igual al que podemos ver en el Task Manager
        cwd: process.cwd(), // Current Working Directory, es el path actual de la CLI que ejecutó el programa
        memory: process.memoryUsage(), // Uso de RAM
        version: process.version, // versión de Node
        arguments: process.argv // argumentos pasados por CLI
    })
})