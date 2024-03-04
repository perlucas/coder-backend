const { Router } = require('express')

const router = Router()

const users = [
    { name: 'Peter', lastname: 'Parker', age: 30, email: 'peterp@gmail.com', phone: '+542354556688', role: 'admin', password: 'test123' },
    { name: 'Tony', lastname: 'Stark', age: 35, email: 'tonyst4rk@gmail.com', phone: '+542354556689', role: 'user', password: 'test1234' },
    { name: 'Maria', lastname: 'Becerra', age: 27, email: 'mari_b@gmail.com', phone: '+542354556690', role: 'user', password: 'test12345' },
    { name: 'Leonardo', lastname: 'Di Caprio', age: 32, email: 'leo_dica@gmail.com', phone: '+542354556610', role: 'admin', password: 'test123456' },
]

router.get('/', (_, res) => {
    res.status(200).json(users)
})

router.post('/', (req, res) => {
    const user = req.body
    user.id = Number.parseInt(Math.random() * 1000)
    user.role = 'user'

    users.push(user)

    res.status(201).json(user)
})

module.exports = router