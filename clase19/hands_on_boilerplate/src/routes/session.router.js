const { Router } = require('express')

const router = Router()

router.post('/login', (req, res) => {
    console.log(req.body)
    // TODO: implementar!

    // 1. verificar que el usuario exista en la BD
    // 2. crear nueva sesión si el usuario existe
    res.redirect('/')
})

router.post('/register', (req, res) => {
    console.log(req.body)
    // TODO: implementar!

    // 1. crear usuario nuevo
    res.redirect('/')
})

module.exports = router