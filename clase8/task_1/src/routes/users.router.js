const { Router } = require('express')

const router = Router()

const users = [
    { id: 100, name: 'Peter', lastname: 'Parker', gender: 'M' },
    { id: 200, name: 'John', lastname: 'Wick', gender: 'M' },
    { id: 300, name: 'Susana', lastname: 'Giménez', gender: 'F' }
]

router.get('/', (req, res) => {
    res.status(200).json(users)
})

router.post('/', (req, res) => {
    const user = req.body
    user.id = Number.parseInt(Math.random() * 1000)

    users.push(user)

    res.status(201).json(user)
})

module.exports = router