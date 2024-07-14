const chaiPromise = import('chai')
const { default: mongoose } = require('mongoose')
const request = require('supertest')
const { bootstrap } = require('../../src/app')

process.env.MONGO_URI = 'mongodb://localhost:27017'
process.env.DB_NAME = 'products-api-dev'

describe('orders API integration tests', () => {
    /**
    * @type Chai.ExpectStatic
    */
    let expect

    /**
     * @type import('express').Express
     */
    let server

    before(async () => {
        const { expect: chaiExpect } = await chaiPromise
        expect = chaiExpect

        const app = await bootstrap()
        server = app
    })

    after(() => {
        mongoose.connection.close()
    })

    it('should create and cancel order successfully', async () => {
        const createProductResponse = await request(server)
            .post('/api/products')
            .send({ name: 'Test', description: 'Test', price: 100, stock: 10 })

        expect(createProductResponse.ok).to.be.true

        const product = createProductResponse.body.payload
        expect(product._id.length).to.be.greaterThan(0)

        const createOrderResponse = await request(server)
            .post('/api/orders')
            .send({ products: [{ id: product._id, q: 5 }] })
        expect(createOrderResponse.ok).to.be.true

        const order = createOrderResponse.body.payload
        expect(order._id.length).to.be.greaterThan(0)

        const cancelOrderResponse = await request(server)
            .put(`/api/orders/${order._id}`)
            .send({ status: 'CANCELLED' })
        expect(cancelOrderResponse.ok).to.be.true

        const getOrdersResponse = await request(server)
            .get('/api/orders')

        const thisOrder = getOrdersResponse.body.payload.find(o => o._id === order._id)
        expect(thisOrder).to.exist
        expect(thisOrder.status).to.equals('CANCELLED')
    })
})