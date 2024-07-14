const { OrdersDao } = require('../dao/orders.dao')
const { ProductsDao } = require('../dao/products.dao')
const { OrdersService } = require('../services/orders.service')
const { ProductsService } = require('../services/products.service')
const { MailingService } = require('../services/mailing.service')

const ordersService = new OrdersService(
    new OrdersDao(),
    new ProductsService(new ProductsDao(), new MailingService())
)

module.exports = {

    /**
     * @type import('express').RequestHandler
     */
    getAll: async (req, res) => {
        const orders = await ordersService.findAll()
        res.json({ status: 'success', payload: orders })
    },

    /**
     * @type import('express').RequestHandler
     */
    create: async (req, res) => {
        try {
            const data = req.body
            const result = await ordersService.create(data)
            return res.json({ status: 'success', payload: result })
        }
        catch (err) {
            return res.json({ status: 'error', message: err.message })
        }
    },

    /**
     * @type import('express').RequestHandler
    */
    updateStatus: async (req, res) => {
        try {
            const status = req.body.status
            const id = req.params.id
            const result = await ordersService.updateStatus(id, status)
            return res.json({ status: 'success', payload: result })
        }
        catch (err) {
            return res.json({ status: 'error', message: err.message })
        }
    }


}