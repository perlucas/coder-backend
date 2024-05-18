module.exports = {

    getOrders: async (_, res) => {
        res.send({ status: 'success', payload: 'getOrders' })
    },

    getOrderById: async (_, res) => {
        res.send({ status: 'success', payload: 'getOrderById' })
    },

    createOrder: async (_, res) => {
        res.send({ status: 'success', payload: 'createOrder' })
    },

    resolveOrder: async (_, res) => {
        res.send({ status: 'success', payload: 'resolveOrder' })
    }
}