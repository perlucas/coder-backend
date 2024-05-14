const { Router } = require('express')
const { productsService } = require('../services')

module.exports = async () => {
    const router = Router()

    router.get('/', async (req, res) => {
        const products = await productsService.getAll()
        res.json(products)
    })

    return router
}