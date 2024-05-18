const { Router } = require('express')
const { getBusiness, getBusinessById, createBusiness, addProduct } = require('../controllers/business.controller')

const router = Router()

module.exports = () => {
    router.get('/', getBusiness)
    router.get('/:id', getBusinessById)
    router.post('/', createBusiness)
    router.post('/:id/products', addProduct)
    return router
}