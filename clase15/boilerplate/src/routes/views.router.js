const { Router } = require('express')

const router = Router()

router.get('/', async (req, res) => {
    const userManager = req.app.get('userManager')

    res.render('index', {
        title: 'Users Manager',
        users: await userManager.getAll(),
        scripts: [
            'index.js'
        ]
    })
})

router.get('/users/create', async (req, res) => {
    res.render('create-user', {
        title: 'Crear usuario',
        scripts: [
            'create-user.js'
        ]
    })
})

module.exports = router