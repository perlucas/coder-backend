
const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // para que nuestro server sepa entender JSON

const palabras = ["Frase", "inicial"]

const frase = () => palabras.join(' ')

app.get('/api/frase', (req, res) => {
    res.status(200)
        .json({ frase: frase() })
})

app.get('/api/palabras/:pos', (req, res) => {
    const index = +req.params.pos

    if (index < 1 || index > palabras.length + 1) {
        res.status(400).json({ error: "Posición inválida" })
        return
    }

    res.status(200)
        .json({ buscada: palabras[index - 1] })
})

app.post('/api/palabras', (req, res) => {
    const { palabra } = req.body

    palabras.push(palabra)

    res.status(201)
        .json({ agregada: palabra, pos: palabras.length })
})


app.put('/api/palabras/:pos', (req, res) => {
    const { palabra } = req.body
    const index = +req.params.pos

    if (index < 1 || index > palabras.length + 1) {
        res.status(400).json({ error: "Posición inválida" })
        return
    }

    const anterior = palabras[ index - 1 ]
    palabras[ index - 1 ] = palabra

    res.status(200)
        .json({ actualizada: palabra, anterior })
})

app.delete('/api/palabras/:pos', (req, res) => {
    const index = +req.params.pos

    if (index < 1 || index > palabras.length + 1) {
        res.status(400).json({ error: "Posición inválida" })
        return
    }

    palabras.splice(index - 1, 1)

    res.status(200)
        .json({ message: 'Palabra eliminada con éxito' })
})

app.listen(8080, () => {
    console.log('Servidor listo!')
})