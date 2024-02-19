const express = require('express')

const app = express()

const users = [
    { id: 100, name: 'Peter', lastname: 'Parker', gender: 'M' },
    { id: 200, name: 'John', lastname: 'Wick', gender: 'M' },
    { id: 300, name: 'Susana', lastname: 'Giménez', gender: 'F' }
]

// devolvemos todoslos usuarios en formato JSON
app.get('/', (req, res) => {
    res.json(users)
})

// devolvemos el usuario que nos viene en el parámetro id
// si entramos a localhost:8080/500, express va a interpretar el 500
// y lo va a colocar dentro de req.params.id
app.get('/:id', (req, res) => {
    const userId = +req.params.id // nota: los parámetros vienen como strings
    const user = users.find(u => u.id === userId)
    res.json(user)
})


app.listen(8080, () => {
    console.log('Servidor listo!')
})