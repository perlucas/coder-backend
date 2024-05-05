const toys = [
    { id: 1, name: 'Paleta', description: 'Paleta para jugar al tenis' },
    { id: 2, name: 'Muñeco', description: 'Muñeco de acción articulado' },
    { id: 3, name: 'Ajedrez', description: 'Ajedrez, juego de mesa para 2' }
]

class Controller {

    constructor() { }

    getAll(_, res) {
        res.json(toys)
    }

    getById(req, res) {
        const id = +req.params.id
        const toy = toys.find(t => t.id === id)
        if (!toy) {
            return res.status(404).json({ error: 'Not found' })
        }
        return res.json(toy)
    }

    deleteById(req, res) {
        const id = +req.params.id
        const index = toys.findIndex(t => t.id === id)
        if (index === -1) {
            return res.status(404).json({ error: 'Not found' })
        }
        toys.splice(index, 1)
        return res.json({ status: 'success', id })
    }

    createOne(req, res) {
        const { name, description } = req.body

        if (!name || !description) {
            return res.status(400).json({ error: 'Invalid parameters' })
        }

        const toy = {
            id: parseInt(Math.random() * 5000),
            name,
            description
        }
        toys.push(toy)
        res.json(toy)
    }

    updateOne(req, res) {
        const id = +req.params.id
        const { name, description } = req.body

        if (!name || !description) {
            return res.status(400).json({ error: 'Invalid parameters' })
        }

        const index = toys.findIndex(t => t.id === id)
        if (index === -1) {
            return res.status(404).json({ error: 'Not found' })
        }

        const updatedToy = {
            ...toys[index],
            name,
            description
        }
        toys[index] = updatedToy
        res.json(updatedToy)
    }
}

module.exports = { Controller }