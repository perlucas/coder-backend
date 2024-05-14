class ProductsRepository {

    constructor(dao) {
        this.dao = dao
    }

    async getAll() {
        return this.dao.getAll()
    }
}

module.exports = { ProductsRepository }