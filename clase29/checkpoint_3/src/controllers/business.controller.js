const { Business } = require('../dao')
const businessDAO = new Business()

module.exports = {

    getBusiness: async (_, res) => {
        const result = await businessDAO.getBusinesses()
        if (!result) {
            return res.sendError({ message: 'Something went wrong!' })
        }
        res.sendSuccess(result)
    },

    getBusinessById: async (req, res) => {
        const id = req.params.id
        const business = await businessDAO.getBusinessById(id)
        if (!business) {

            return business === false
                ? res.sendError({ message: 'Not found!' }, 404)
                : res.sendError({ message: 'Something went wrong!' })
        }

        res.sendSuccess(business)
    },

    createBusiness: async (req, res) => {
        const businessData = req.body
        const business = await businessDAO.saveBusiness(businessData)
        if (!business) {
            return res.sendError({ message: 'Something went wrong!' })
        }

        res.sendSuccess(business)
    },

    addProduct: async (req, res) => {
        const id = req.params.id
        const product = req.body
        const business = await businessDAO.getBusinessById(id)
        business.products.push(product)
        const result = await businessDAO.updateBusiness(id, { products: business.products })
        if (!result) {
            return res.sendError({ message: 'Something went wrong!' })
        }

        res.sendSuccess({ product, message: 'Product added!' })
    }
}