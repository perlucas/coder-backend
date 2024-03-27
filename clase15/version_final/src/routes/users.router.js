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

const userIsAdmin = async (req, res, next) => {
    const userManager = req.app.get('userManager')
    const email = req.headers['x-user-email']
    const user = await userManager.getByEmail(email)
    if (!user || user.role !== 'admin') {
        return res.status(403).json({ error: 'user should be admin' })
    }
    next()
}

router.delete('/:id', userIsAdmin, async (req, res) => {
    try {
        const userManager = req.app.get('userManager')
        await userManager.deleteById(req.params.id)

        res.status(200).json({ success: true })
    }
    catch (err) {
        return res.status(500).json({ success: false })
    }
})

router.post('/', userIsAdmin, async (req, res) => {
    try {
        const userManager = req.app.get('userManager')
        console.log(req.body)
        await userManager.addUser(req.body)

        return res.status(200).json({ success: true })
    }
    catch (err) {
        console.log(err)
        return res.status(400).json({ success: false, err })
    }
})

module.exports = router