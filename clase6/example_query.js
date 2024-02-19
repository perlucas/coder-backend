const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))

const users = [
    { id: 100, name: 'Peter', lastname: 'Parker', gender: 'M' },
    { id: 200, name: 'John', lastname: 'Wick', gender: 'M' },
    { id: 300, name: 'Susana', lastname: 'Giménez', gender: 'F' }
]

// el cliente puede enviar un request a /,y acá se le devolverán todos los usuarios
// pero si envía el request a /?gender=M, se guardará el dato en el parámetro req.query.gender
app.get('/', (req, res) => {
    const genderFilter = req.query.gender

    const result = genderFilter
        ? users.filter(u => u.gender === genderFilter)
        : users

    res.json(result)
})

app.get('/:id', (req, res) => {
    const userId = +req.params.id
    const user = users.find(u => u.id === userId)
    res.json(user)
})


app.listen(8080, () => {
    console.log('Servidor listo!')
})