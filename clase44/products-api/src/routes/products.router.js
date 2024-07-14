const { Router } = require('express')
const { getAll, create, update } = require('../controllers/products.controller')

const router = Router()

router.get('/', getAll)
router.post('/', create)
router.put('/:id', update)

module.exports = router