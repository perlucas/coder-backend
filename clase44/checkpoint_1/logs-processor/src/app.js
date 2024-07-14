const express = require('express')

const app = express()

app.use(express.json())

app.post('/logs', (req, res) => {
    console.log('Log received!', req.body)
    res.sendStatus(200)
})

app.listen(8100, () => console.log('Logs API ready!'))