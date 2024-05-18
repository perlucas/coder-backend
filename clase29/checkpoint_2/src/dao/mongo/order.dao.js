const OrderModel = require('./models/order.model')

class OrderDAO {

    async getOrders() {
        try {
            const orders = await OrderModel.find()
            return orders.map(u => u.toObject())
        }
        catch (err) {
            console.error(err)
            return null
        }
    }

    async getOrderById(id) {
        try {
            const order = await OrderModel.findById(id)
            return order?.toObject() ?? null
        }
        catch (err) {
            console.error(err)
            return null
        }
    }

    async createOrder(order) {
        try {
            const savedOrder = await OrderModel.create(order)
            return savedOrder.toObject()
        }
        catch (err) {
            console.error(err)
            return null
        }
    }

    async resolveOrder(id, status) {
        try {
            const result = await OrderModel.updateOne({ _id: id }, { $set: { status } })
            return result
        }
        catch (err) {
            console.error(err)
            return null
        }
    }
}

module.exports = { OrderDAO }