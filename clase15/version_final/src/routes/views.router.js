const { Router } = require('express')

const router = Router()

router.get('/', async (req, res) => {
    const userManager = req.app.get('userManager')
    const users = await userManager.getAll()
    console.log(users)
    res.render('index', {
        title: 'Users Manager',
        users,
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