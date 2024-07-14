class OrdersService {
    constructor(dao, productsService) {
        this.dao = dao
        this.productsService = productsService
    }

    async findAll() {
        return await this.dao.findAll()
    }

    async create(orderData) {
        if (
            !orderData.products ||
            orderData.products.length === 0
        ) {
            throw new Error('invalid data supplied')
        }

        const availability = await this.productsService.availabilityReport(orderData.products.map(p => p.id))
        const stockDiscounts = []
        let totalPrice = 0
        for (const item of availability) {
            const orderedItem = orderData.products.find(p => p.id === item.id)

            if (item.stock < orderedItem.q) {
                throw new Error(`insufficient stock for product ${item.id}`)
            }

            totalPrice += (item.price * orderedItem.q)

            stockDiscounts.push({ id: item.id, stock: orderedItem.q })
        }

        if (totalPrice === 0) {
            throw new Error('empty order!')
        }

        await this.productsService.discountOrderStock(stockDiscounts)

        const order = {
            products: orderData.products,
            totalPrice,
            status: 'CONFIRMED'
        }

        return await this.dao.create(order)
    }

    async updateStatus(id, status) {
        const order = await this.dao.findById(id)
        if (!order) {
            throw new Error('order not found!')
        }

        if (['PAID', 'CANCELLED'].includes(order.status)) {
            throw new Error('order status cannot be updated')
        }

        if (status === 'PAID') {
            await this.dao.updateStatus(id, status)
            return
        }

        if (status === 'CANCELLED') {
            await this.productsService.restoreOrderStock(order.products.map(p => ({ id: p.id, stock: p.q })))
            await this.dao.updateStatus(id, status)
            return
        }

        throw new Error(`unknown status: ${status}`)
    }
}

module.exports = { OrdersService }