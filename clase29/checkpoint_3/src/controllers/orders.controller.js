const { Order, User, Business } = require('../dao')

const orderDAO = new Order()
const userDAO = new User()
const businessDAO = new Business()

module.exports = {

    getOrders: async (_, res) => {
        const orders = await orderDAO.getOrders()
        if (!orders) {
            return res.sendError('Something went wrong!')
        }

        res.sendSuccess(orders)
    },

    getOrderById: async (req, res) => {
        const id = req.params.id
        const order = await orderDAO.getOrderById(id)
        if (!order) {
            return order === false
                ? res.sendError({ message: 'Not found!' }, 404)
                : res.sendError({ message: 'Something went wrong!' })
        }

        res.sendSuccess(order)
    },

    createOrder: async (req, res) => {
        const { user, business, products } = req.body

        const userObject = await userDAO.getUserById(user)
        const businessObject = await businessDAO.getBusinessById(business)

        const productsInBusiness = businessObject.products.filter(p => products.includes(p.id))
        const totalPrice = productsInBusiness.reduce((acc, p) => {
            acc += p.price
            return acc
        }, 0)

        const order = await orderDAO.createOrder({
            number: Date.now(),
            totalPrice,
            products: productsInBusiness,
            status: 'pending',
            business,
            user
        })

        if (!order) {
            return res.sendError('Something went wrong!')
        }

        const userOrders = userObject.orders || []
        userOrders.push(order._id)
        await userDAO.updateUser(user, { orders: userOrders })

        return res.sendSuccess(order)
    },

    resolveOrder: async (req, res) => {
        const id = req.params.id
        const { status } = req.body
        const result = await orderDAO.resolveOrder(id, status)

        if (!result) {
            return res.sendError('Something went wrong!')
        }

        return res.sendSuccess({ newStatus: status, message: 'Status updated!' })
    }
}