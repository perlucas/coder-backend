const { Router } = require('express')
const { getOrders, getOrderById, createOrder, resolveOrder } = require('../controllers/orders.controller')

const router = Router()

module.exports = () => {
    router.get('/', getOrders)
    router.get('/:id', getOrderById)
    router.post('/', createOrder)
    router.put('/:id', resolveOrder)
    return router
}