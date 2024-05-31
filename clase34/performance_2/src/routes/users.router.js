const { Router } = require('express')
const { registerUser, loginUser, mockUser } = require('../controller/users.controller')

const router = Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/mock', mockUser)

module.exports = router