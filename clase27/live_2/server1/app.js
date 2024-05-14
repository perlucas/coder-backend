const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/numbers', (req, res) => {

    const numbers = []
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.random() * 10000)
    }

    res.json({ numbers })
})


app.listen(3000, () => {
    console.log('Servidor listo!')
})