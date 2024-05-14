const express = require('express')

const routes = [
    require('./routes/toys.router')
]

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

for (const route of routes) {
    route.configure(app)
}

app.listen(8080, () => {
    console.log('Servidor listo!')
})