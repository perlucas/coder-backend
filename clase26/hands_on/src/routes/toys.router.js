const { Router } = require('express')
const { ToysController } = require('../controllers/toys.controller')
const { ToysService } = require('../services/toysService')

const router = Router()

const withController = callback => {
    return (req, res) => {
        const service = new ToysService(
            req.app.get('toys.storage')
        )
        const controller = new ToysController(service)
        return callback(controller, req, res)
    }
}

router.get('/', withController((controller, req, res) => controller.getAll(req, res)))

router.get('/:id', withController((controller, req, res) => controller.getById(req, res)))

router.post('/', withController((controller, req, res) => controller.createOne(req, res)))

router.put('/:id', withController((controller, req, res) => controller.updateOne(req, res)))

router.delete('/:id', withController((controller, req, res) => controller.deleteById(req, res)))

module.exports = {
    configure: app => app.use('/api/toys', router)
}