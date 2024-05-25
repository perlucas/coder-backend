const express = require('express')
const compression = require('express-compression')
const zlib = require('zlib')

const app = express()
app.use(express.json())

// sin compresión
app.get('/test', (req, res) => {
    const response = 'Hola Coders, esta es una respuesta muy larga\n'.repeat(10000)
    res.send(response)
})

// // compresión con deflate
// app.get('/test', (req, res) => {
//     const response = 'Hola Coders, esta es una respuesta muy larga\n'.repeat(10000)

//     res.setHeader('Content-Encoding', 'deflate')
//     zlib.deflate(response, (err, result) => {
//         res.write(result)
//     })
// })

// // compresión con gzip o brotli
// app.use(compression())
// app.get('/test', (req, res) => {
//     const response = 'Hola Coders, esta es una respuesta muy larga\n'.repeat(10000)
//     res.send(response)
// })

// // compresión con gzip manual
// app.get('/test', (req, res) => {
//     const response = 'Hola Coders, esta es una respuesta muy larga\n'.repeat(10000)
    
//     res.setHeader('Content-Encoding', 'gzip')
//     zlib.gzip(response, {level: 1, strategy: 4},(err, result) => {
//         res.write(result)
//     })

// })


app.listen(8080, () => {
    console.log('Servidor listo!')
})