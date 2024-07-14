const sinon = require('sinon')
const chai = import('chai')

const { OrdersService } = require('../src/services/orders.service')

describe('orders service tests', () => {
    /**
     * @type Chai.ExpectStatic
     */
    let expect

    const daoMock = {
        create: sinon.stub(),
        findById: sinon.stub(),
        updateStatus: sinon.stub()
    }

    const productsServiceMock = {
        availabilityReport: sinon.stub(),
        discountOrderStock: sinon.stub(),
        restoreOrderStock: sinon.stub()
    }

    const service = new OrdersService(daoMock, productsServiceMock)

    before(async () => {
        const { expect: chaiExpect } = await chai
        expect = chaiExpect
    })

    beforeEach(() => {
        daoMock.create.reset()
        daoMock.findById.reset()
        daoMock.updateStatus.reset()
        productsServiceMock.availabilityReport.reset()
        productsServiceMock.discountOrderStock.reset()
        productsServiceMock.restoreOrderStock.reset()
    })

    it('should throw if empty order is created', async () => {
        let thrownErr
        try {
            await service.create({ products: [] })
        }
        catch (err) {
            thrownErr = err
        }

        expect(thrownErr.message).to.equals('invalid data supplied')
    })

    it('should throw if insufficient stock', async () => {
        productsServiceMock.availabilityReport.resolves([{ id: 'id-1', stock: 6 }, { id: 'id-2', stock: 2 }])

        let thrownErr
        try {
            await service.create({
                products: [
                    { id: 'id-1', q: 5 },
                    { id: 'id-2', q: 5 }
                ]
            })
        }
        catch (err) {
            thrownErr = err
        }

        expect(thrownErr.message).to.equals('insufficient stock for product id-2')
    })

    it('should create order if valid data', async () => {
        productsServiceMock.availabilityReport.resolves([
            { id: 'id-1', stock: 6, price: 100 },
            { id: 'id-2', stock: 6, price: 200 }
        ])

        await service.create({
            products: [
                { id: 'id-1', q: 5 },
                { id: 'id-2', q: 5 }
            ]
        })

        expect(productsServiceMock.discountOrderStock.calledWith([
            { id: 'id-1', stock: 5 },
            { id: 'id-2', stock: 5 }
        ])).to.be.true

        expect(daoMock.create.calledWith({
            products: [
                { id: 'id-1', q: 5 },
                { id: 'id-2', q: 5 }
            ],
            totalPrice: 1500,
            status: 'CONFIRMED'
        })).to.be.true

    })

    it('should restore stock if order cancelled', async () => {
        daoMock.findById.resolves({ status: 'CONFIRMED', products: [{ id: 'id-1', q: 5 }] })

        await service.updateStatus('order-1', 'CANCELLED')

        expect(productsServiceMock.restoreOrderStock.calledWith([{ id: 'id-1', stock: 5 }])).to.be.true

        expect(daoMock.updateStatus.calledWith('order-1', 'CANCELLED')).to.be.true
    })
})