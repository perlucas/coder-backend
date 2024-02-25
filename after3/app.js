const fs = require('fs')
const express = require('express')

const app = express()

let countRequests = 0

app.get('/load_files', (_, res) => {
    for (let i = 0; i < 23; i++) {
        fs.readFileSync('./example2.txt')
        // fs.readFileSync('./example2.txt')
    }

    res.setHeader('Content-Type', 'text/html')
    res.end(`Files loaded!, request #${++countRequests}`)
})

app.get('/hello', (_, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end(`Hola mundo!, request #${++countRequests}`)
})

app.listen(3000, () => {
    console.log('Server listening!')
})