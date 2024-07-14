const Product = require('./models/product.model')

class ProductsDao {

    findAll() {
        return Product.find()
    }

    create(product) {
        return Product.create(product)
    }

    updateOne(id, product) {
        return Product.findByIdAndUpdate(id, { $set: product }, { returnDocument: 'after' })
    }

    async availabilityReport(productIds) {
        const products = await Product.find({ _id: productIds }, { price: 1, stock: 1 })
        return products.map(p => ({ ...p.toObject(), id: p._id.toString() }))
    }

    incrementStock(products) {
        return Promise.all(
            products.map(p => Product.findByIdAndUpdate(p.id, { $inc: { stock: p.stock } }, { returnDocument: 'after' }))
        )
    }

    subtractStock(products) {
        return Promise.all(
            products.map(p => Product.findByIdAndUpdate(p.id, { $inc: { stock: -p.stock } }, { returnDocument: 'after' }))
        )
    }
}

module.exports = { ProductsDao }