const { Router } = require('express')
const { getAll, create, updateStatus } = require('../controllers/orders.controller')

const router = Router()

router.get('/', getAll)
router.post('/', create)
router.put('/:id', updateStatus)

module.exports = router