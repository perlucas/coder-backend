class ToysController {

    constructor(toysService) {
        this.service = toysService
    }

    #handleError(res, err) {
        if (err.message === 'not found') {
            return res.status(404).json({ error: 'Not found' })
        }

        if (err.message === 'invalid parameters') {
            return res.status(400).json({ error: 'Invalid parameters' })
        }

        return res.status(500).json({ error: err })
    }

    getAll(_, res) {
        res.json(this.service.getAll())
    }

    getById(req, res) {
        const id = +req.params.id

        try {
            const toy = this.service.getById(id)
            if (!toy) {
                return res.status(404).json({ error: 'Not found' })
            }

            return res.json(toy)
        }
        catch (err) {
            return this.#handleError(res, err)
        }
    }

    deleteById(req, res) {
        const id = +req.params.id
        try {
            this.service.deleteById(id)
            res.json({ status: 'success', id })
        }
        catch (err) {
            return this.#handleError(res, err)
        }
    }

    createOne(req, res) {
        const { name, description } = req.body
        try {
            const toy = this.service.createOne(name, description)
            return res.json(toy)
        }
        catch (err) {
            return this.#handleError(res, err)
        }
    }

    updateOne(req, res) {
        const id = +req.params.id
        const { name, description } = req.body
        try {
            const updatedToy = this.service.updateById(id, name, description)
            return res.json(updatedToy)
        }
        catch (err) {
            return this.#handleError(res, err)
        }
    }
}

module.exports = { ToysController }