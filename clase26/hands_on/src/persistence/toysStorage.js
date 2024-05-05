const toys = [
    { id: 1, name: 'Paleta', description: 'Paleta para jugar al tenis' },
    { id: 2, name: 'Muñeco', description: 'Muñeco de acción articulado' },
    { id: 3, name: 'Ajedrez', description: 'Ajedrez, juego de mesa para 2' }
]

class ToysStorage {

    getAll() {
        return toys
    }

    getById(id) {
        return toys.find(t => t.id === id)
    }

    deleteById(id) {
        const index = toys.findIndex(t => t.id === id)
        if (index === -1) {
            throw new Error('not found')
        }
        toys.splice(index, 1)
    }

    createToy(name, description) {
        const toy = {
            id: parseInt(Math.random() * 5000),
            name,
            description
        }
        toys.push(toy)
        return toy
    }

    updateById(id, name, description) {
        const index = toys.findIndex(t => t.id === id)
        if (index === -1) {
            throw new Error('not found')
        }

        const updatedToy = {
            ...toys[index],
            name,
            description
        }
        toys[index] = updatedToy
        return updatedToy
    }
}

module.exports = { ToysStorage }