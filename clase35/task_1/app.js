/**
 * @type {import('cluster').Cluster}
 */
const cluster = require('cluster')
const { cpus } = require('os')

if (cluster.isPrimary) {
    console.log(`Éste es el proceso primario: ${process.pid}`)

    const numCpus = cpus().length
    for (let i = 0; i < numCpus; i++) {
        cluster.fork()
    }
    console.log(`Creados ${numCpus} workers`)


    // podemos hookearnos al evento 'exit' emitido desde los workers cuando son finalizados
    cluster.on('exit', (w) => {
        // en el event listener, generamos un nuevo worker
        console.log(`El worker ${w.process.pid} ha sido finalizado`)
        cluster.fork()
    })

}
else {
    console.log(`Worker creado: ${process.pid}`)

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

}