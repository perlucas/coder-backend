const express = require('express')
const { ToysStorage } = require('./persistence/toysStorage')

const routes = [
    require('./routes/toys.router')
]

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('toys.storage', new ToysStorage())

for (const route of routes) {
    route.configure(app)
}

app.listen(8080, () => {
    console.log('Servidor listo!')
})