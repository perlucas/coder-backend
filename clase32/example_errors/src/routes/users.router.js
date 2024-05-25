const { Router } = require('express')
const { createUser } = require('../controllers/users.controller')

const router = Router()

router.post('/', createUser)

module.exports = router