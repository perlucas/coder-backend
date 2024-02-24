
const express = require('express')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // para que nuestro server sepa entender JSON

const users = [
    { id: 100, name: 'Peter', lastname: 'Parker', gender: 'M' },
    { id: 200, name: 'John', lastname: 'Wick', gender: 'M' },
    { id: 300, name: 'Susana', lastname: 'Giménez', gender: 'F' }
]

app.get('/', (req, res) => {
    res.status(200)
        .json(users)
})

app.get('/:id', (req, res) => {
    const userId = +req.params.id // nota: los parámetros vienen como strings
    const user = users.find(u => u.id === userId)

    if (isNaN(userId)) {
        // HTTP 400 => hay un error en el request o alguno de sus parámetros
        res.status(400).json({ error: "Formato inválido de ID" })
        return
    }
    
    if (!user) {
        // HTTP 404 => el ID es válido, pero no se encontró ese usuario
        res.status(404).json({ error: "No se encontró un usuario con ese ID" })
        return
    }

    // HTTP 200 OK
    res.status(200).json(user)
})


app.listen(8080, () => {
    console.log('Servidor listo!')
})