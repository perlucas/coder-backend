class ToysService {
    constructor(storage) {
        this.storage = storage
    }

    getAll() {
        return this.storage.getAll()
    }

    getById(id) {
        return this.storage.getById(id)
    }

    deleteById(id) {
        this.storage.deleteById(id)
    }

    createOne(name, description) {
        if (!name || !description) {
            throw new Error('invalid parameters')
        }

        return this.storage.createToy(name, description)
    }

    updateById(id, name, description) {
        if (!name || !description) {
            throw new Error('invalid parameters')
        }

        return this.storage.updateById(id, name, description)
    }
}

module.exports = { ToysService }