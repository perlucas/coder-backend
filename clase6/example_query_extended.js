const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))

const users = [
    { id: 100, name: 'Peter', lastname: 'Parker', gender: 'M' },
    { id: 200, name: 'John', lastname: 'Wick', gender: 'M' },
    { id: 300, name: 'Susana', lastname: 'Giménez', gender: 'F' }
]

// en este ejemplo, mostramos que se pueden soportar el número de queries que querramos
// tenemos que combinarlas, interpretando cada parámetro
// ejemplo: GET /?gender=M&name=P => se filtrará por género y nombre
app.get('/', (req, res) => {
    const genderFilter = req.query.gender

    const usersByGender = genderFilter
        ? users.filter(u => u.gender === genderFilter)
        : users

    const nameFilter = req.query.name

    const usersByName = nameFilter
        ? usersByGender.filter(u => u.name.startsWith(nameFilter))
        : usersByGender

    res.json(usersByName)
})

app.get('/:id', (req, res) => {
    const userId = +req.params.id
    const user = users.find(u => u.id === userId)
    res.json(user)
})


app.listen(8080, () => {
    console.log('Servidor listo!')
})