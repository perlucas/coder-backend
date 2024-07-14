const sinon = require('sinon')
const chai = import('chai')

const { ProductsService } = require('../src/services/products.service')

describe('product service tests', () => {
    /**
     * @type Chai.ExpectStatic
     */
    let expect

    const daoMock = {
        subtractStock: sinon.stub()
    }

    const mailerMock = {
        notifyProvidersOutOfStock: sinon.stub()
    }

    const service = new ProductsService(daoMock, mailerMock)

    before(async () => {
        const { expect: chaiExpect } = await chai
        expect = chaiExpect
    })

    it('should fail when creating invalid product', async () => {
        const invalidProducts = [
            {},
            { name: '' },
            { name: 'test' },
            { name: 'test', description: '' },
            { name: 'test', description: 'test' },
            { name: 'test', description: 'test', price: 0 },
            { name: 'test', description: 'test', price: -1 },
            { name: 'test', description: 'test', price: 10 },
            { name: 'test', description: 'test', price: 10, stock: -1 },
        ]

        for (const product of invalidProducts) {
            let thrownErr
            try {
                await service.create(product)
            }
            catch (err) {
                thrownErr = err
            }
            expect(thrownErr.message).to.equals('invalid data supplied')
        }
    })

    it('should notify providers if out of stock', async () => {
        daoMock.subtractStock.resolves([
            { id: 'id-1', name: 'Testing 1', stock: 0 },
            { id: 'id-2', name: 'Testing 2', stock: 5 },
            { id: 'id-3', name: 'Testing 3', stock: 0 },
        ])

        mailerMock.notifyProvidersOutOfStock.resolves()

        await service.discountOrderStock([
            { id: 'id-1', stock: 10 },
            { id: 'id-2', stock: 15 },
            { id: 'id-3', stock: 10 }
        ])

        expect(mailerMock.notifyProvidersOutOfStock.calledWith([
            { id: 'id-1', name: 'Testing 1', stock: 0 },
            { id: 'id-3', name: 'Testing 3', stock: 0 },
        ]))

    })
})