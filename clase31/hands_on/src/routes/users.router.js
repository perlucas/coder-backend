const { Router } = require('express')
const { generateUser } = require('../mocks/generateUser')
const router = Router()

router.get('/', (req, res) => {
    const users = []
    for (let i = 0; i < 50; i++) {
        users.push(generateUser())
    }
    res.json(users)
})

module.exports = router