const { Router } = require('express')
const { createDAO } = require('../dao/contacts')

module.exports = async () => {
    const router = Router()
    const dao = await createDAO()

    router.get('/', async (req, res) => {
        const contacts = await dao.getAll()
        res.json(contacts)
    })

    router.post('/', async (req, res) => {
        const { firstName, lastName, phone } = req.body
        const addedContact = await dao.createContact({ firstName, lastName, phone })
        res.json(addedContact)
    })

    return router
}