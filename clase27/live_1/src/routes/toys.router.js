const { Router } = require('express')
const { default: mongoose } = require('mongoose')
const { DbConnection } = require('../db/db-connection')

const router = Router()

router.get('/', async (_, res) => {
    const cursor = await DbConnection.getInstance()
        .getConnection()
        .collection('toys')
        .find()

    const toys = await cursor.toArray()

    res.json(toys)
})

router.post('/', async (req, res) => {
    const newToy = {
        name: req.body.name,
        description: req.body.description
    }

    const result = await DbConnection.getInstance()
        .getConnection()
        .collection('toys')
        .insertOne(newToy)

    res.json(result)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id

    const toy = await DbConnection.getInstance()
        .getConnection()
        .collection('toys')
        .findOne({ _id: new mongoose.Types.ObjectId(id) })

    res.json(toy)
})

module.exports = {
    configure: app => app.use('/api/toys', router)
}