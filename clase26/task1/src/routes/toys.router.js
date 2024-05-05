const { Router } = require('express')
const { Controller } = require('../controllers/toys.controller')

const router = Router()

router.get('/', (req, res) => new Controller().getAll(req, res))

router.get('/:id', (req, res) => new Controller().getById(req, res))

router.post('/', (req, res) => new Controller().createOne(req, res))

router.put('/:id', (req, res) => new Controller().updateOne(req, res))

router.delete('/:id', (req, res) => new Controller().deleteById(req, res))

module.exports = {
    configure: app => app.use('/api/toys', router)
}