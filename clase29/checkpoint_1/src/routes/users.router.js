const { Router } = require('express')
const { getUsers, getUserById, saveUser } = require('../controllers/users.controller')

const router = Router()

module.exports = () => {
    router.get('/', getUsers)
    router.get('/:id', getUserById)
    router.post('/', saveUser)
    return router
}