const cluster = require('cluster')
const { cpus } = require('os')

if (cluster.isPrimary) {
    console.log(`Éste es el proceso primario: ${process.pid}`)

    // generamos tantos workers como CPUs tenga nuestra máquina
    const numCpus = cpus().length
    for (let i = 0; i < numCpus; i++) {
        // por defecto, fork genera un nuevo proceso que ejecuta el archivo actual
        cluster.fork()
    }
    console.log(`Creados ${numCpus} workers`)
}
else {
    console.log(`Worker creado: ${process.pid}`)

    // en cada worker, montar nuestro servidor de express
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