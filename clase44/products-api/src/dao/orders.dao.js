const Order = require('./models/order.model')

class OrdersDao {

    findAll() {
        return Order.find()
    }

    findById(id) {
        return Order.findById(id)
    }

    create(order) {
        return Order.create(order)
    }

    updateStatus(id, status) {
        return Order.findByIdAndUpdate(id, { $set: { status } }, { returnDocument: 'after' })
    }

}

module.exports = { OrdersDao }