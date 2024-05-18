module.exports = {

    getBusiness: async (_, res) => {
        res.send({ status: 'success', payload: 'getBusiness' })
    },

    getBusinessById: async (_, res) => {
        res.send({ status: 'success', payload: 'getBusinessById' })
    },

    createBusiness: async (_, res) => {
        res.send({ status: 'success', payload: 'createBusiness' })
    },

    addProduct: async (_, res) => {
        res.send({ status: 'success', payload: 'addProduct' })
    }
}