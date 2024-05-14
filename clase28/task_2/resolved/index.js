const { MemoryDAO: ProductsDAO } = require("../dao/products/memory");
const { ProductsRepository } = require("./products.repository");

module.exports = {
    productsService: new ProductsRepository(new ProductsDAO()) // ...y si quiero llamar a await dao.init()?
}