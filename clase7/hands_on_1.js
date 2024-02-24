
const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // para que nuestro server sepa entender JSON

const users = [
    { id: 100, name: 'Peter', lastname: 'Parker', gender: 'M' },
    { id: 200, name: 'John', lastname: 'Wick', gender: 'M' },
    { id: 300, name: 'Susana', lastname: 'Giménez', gender: 'F' }
]

app.get('/users', (req, res) => {
    res.status(200)
        .json(users)
})

app.get('/users/:id', (req, res) => {
    const userId = +req.params.id // nota: los parámetros vienen como strings
    const user = users.find(u => u.id === userId)

    if (isNaN(userId)) {
        // HTTP 400 => hay un error en el request o alguno de sus parámetros
        res.status(400).json({ error: "Invalid ID format" })
        return
    }
    
    if (!user) {
        // HTTP 404 => el ID es válido, pero no se encontró ese usuario
        res.status(404).json({ error: "User not found" })
        return
    }

    // HTTP 200 OK
    res.status(200).json(user)
})

app.post('/users', (req, res) => {
    const user = req.body
    user.id = Number.parseInt(Math.random() * 1000) // generar un ID para el nuevo usuario

    console.log(user)

    users.push(user) // guardar el usuario

    res.status(201)
        .json({ message: "User created successfully!" })
})

app.put('/users/:id', (req, res) => {
    const userId = +req.params.id // nota: los parámetros vienen como strings
    const userIndex = users.findIndex(u => u.id === userId)

    if (isNaN(userId)) {
        res.status(400).json({ error: "Invalid ID format" })
        return
    }
    
    if (userIndex < 0) {
        res.status(404).json({ error: "User not found" })
        return
    }

    // comenzamos con los datos por defecto, sobreescribimos los que los envía el cliente
    // pero mantenemos el id original, por si acaso el cliente intentó cambiarle el id
    const newUserData = { ...users[userIndex], ...req.body, id: userId }
    users[userIndex] = newUserData

    // HTTP 200 OK
    res.status(200).json(newUserData)
})

app.delete('/users/:id', (req, res) => {
    const userId = +req.params.id // nota: los parámetros vienen como strings
    const userIndex = users.findIndex(u => u.id === userId)

    if (isNaN(userId)) {
        res.status(400).json({ error: "Invalid ID format" })
        return
    }
    
    if (userIndex < 0) {
        res.status(404).json({ error: "User not found" })
        return
    }

    // remover el usuario en ese índice del array
    users.splice(userIndex, 1)

    // HTTP 200 OK
    res.status(200).json({ message: "User has been deleted successfully" })
})


app.listen(8080, () => {
    console.log('Servidor listo!')
})