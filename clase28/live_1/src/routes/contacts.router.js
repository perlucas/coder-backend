const { Router } = require('express')
const { createDAO } = require('../dao/contacts')

const router = Router()

router.get('/', async (req, res) => {
    const dao = await createDAO()
    const contacts = await dao.getAll()
    res.json(contacts)
})

module.exports = router