const fs = require('fs')

const express = require('express') // importamos el módulo de terceros, express

const app = express() // creamos una instancia

app.use(express.urlencoded({ extended: true }))

const users = [
    { id: 100, name: 'Peter', lastname: 'Parker', gender: 'M' },
    { id: 200, name: 'John', lastname: 'Wick', gender: 'M' },
    { id: 300, name: 'Susana', lastname: 'Giménez', gender: 'F' }
]

app.get('/usuario/:userId', (req, res) => {
    const userId = +req.params.userId

    const user = users.find(u => u.id === userId)

    if (!user) {
        res.send({ status: 'ERROR', message: 'Producto no encontrado' })
        return
    }

    res.send(user)
})

// /usuarios?gender=M => todos los usuarios masculinos
app.get('/usuarios', (req, res) => {
    const { gender, nameStartsWith } = req.query
    console.log(gender, nameStartsWith)

    // filtro por género
    const usersByGender = gender
        ? users.filter(u => u.gender === gender)
        : users

    // filtro por 1er letra del nombre
    const usersByName = nameStartsWith
        ? usersByGender.filter(u => u.name.startsWith(nameStartsWith))
        : usersByGender

    res.json(usersByName)
})


app.get('/file', async (req, res) => {
    const fileContents = await fs.promises.readFile(__dirname + '/../TEST.txt', 'utf-8')

    res.end(fileContents)
})

app.listen(8080, () => {
    console.log('Servidor listo!')
})