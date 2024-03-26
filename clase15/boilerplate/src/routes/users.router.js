const { Router } = require('express')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const userManager = req.app.get('userManager')
        const users = await userManager.getAll(req.query)

        res.status(200).json(users)
    }
    catch (err) {
        return res.status(400).json({ success: false })
    }
})

// TODO_2: controlar accesos de admin mediante middleware!

router.delete('/:id', async (req, res) => {
    try {
        const userManager = req.app.get('userManager')
        await userManager.deleteById(req.params.id)

        res.status(200).json({ success: true })
    }
    catch (err) {
        return res.status(500).json({ success: false })
    }
})

router.post('/', async (req, res) => {
    try {
        const userManager = req.app.get('userManager')
        console.log(req.body)
        await userManager.addUser(req.body)

        return res.status(200).json({ success: true })
    }
    catch (err) {
        return res.status(400).json({ success: false })
    }
})

module.exports = router