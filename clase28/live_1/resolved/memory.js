class MemoryDAO {
    constructor() {
        this.contacts = []
    }

    async init() {
        this.contacts = [
            { id: 1, firstName: 'Michael', lastName: 'Jordan', phone: '+1 999 88888777' },
            { id: 2, firstName: 'Alejandro', lastName: 'Saenz', phone: '+1 999 88888776' },
            { id: 3, firstName: 'Ariana', lastName: 'Grande', phone: '+1 999 88888775' }
        ]
    }

    async getAll() {
        return this.contacts
    }
}

module.exports = { MemoryDAO }