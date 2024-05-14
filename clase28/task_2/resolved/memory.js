class MemoryDAO {
    constructor() {
        this.products = [
            { id: 1, name: 'Pelota', description: 'Pelota de fútbol de cuero'},
            { id: 2, name: 'Ajedrez', description: 'Juego de mesa ajedrez, para 11 años o más'}
        ]
    }

    async init() {}

    async getAll() {
        return this.products
    }
}

module.exports = { MemoryDAO }