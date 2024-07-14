const { ProductsDao } = require('../dao/products.dao')
const { ProductsService } = require('../services/products.service')
const { MailingService } = require('../services/mailing.service')

const service = new ProductsService(
    new ProductsDao(),
    new MailingService()
)

module.exports = {

    /**
     * @type import('express').RequestHandler
     */
    getAll: async (_, res) => {
        const products = await service.findAll()
        return res.json({ status: 'success', payload: products })
    },

    /**
     * @type import('express').RequestHandler
     */
    create: async (req, res) => {
        try {
            const data = req.body
            const result = await service.create(data)
            return res.json({ status: 'success', payload: result })
        }
        catch (err) {
            return res.json({ status: 'error', message: err.message })
        }
    },

    /**
     * @type import('express').RequestHandler
     */
    update: async (req, res) => {
        try {
            const id = req.params.id
            const data = req.body
            const result = await service.update(id, data)
            return res.json({ status: 'success', payload: result })
        }
        catch (err) {
            return res.json({ status: 'error', message: err.message })
        }
    }


}