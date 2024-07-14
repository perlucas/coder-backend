class ProductsService {
    constructor(dao, emailService) {
        this.dao = dao
        this.emailService = emailService
    }

    async findAll() {
        return await this.dao.findAll()
    }

    async create(product) {
        if (
            !product.name ||
            !product.description ||
            !product.price ||
            product.price <= 0 ||
            !product.stock ||
            product.stock < 0
        ) {
            throw new Error('invalid data supplied')
        }

        return await this.dao.create(product)
    }

    async update(id, product) {
        const hasField = fieldName => product[fieldName] !== undefined

        if (
            (hasField('price') && product.price <= 0) ||
            (hasField('stock') && product.stock < 0) ||
            (hasField('name') && product.name.length === 0)
        ) {
            throw new Error('invalid data supplied')
        }

        return await this.dao.updateOne(id, product)
    }

    async availabilityReport(productIds) {
        return this.dao.availabilityReport(productIds)
    }

    async discountOrderStock(products) {
        const updatedProducts = await this.dao.subtractStock(products)
        const productsOutOfStock = updatedProducts.filter(p => p.stock === 0)
        
        // send email if product is out of stock
        if (productsOutOfStock.length > 0) {
            await this.emailService.notifyProvidersOutOfStock(productsOutOfStock)
        }
    }

    async restoreOrderStock(products) {
        await this.dao.incrementStock(products)
    }
}

module.exports = { ProductsService }