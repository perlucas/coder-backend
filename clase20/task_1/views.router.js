const { Router } = require('express')

const router = Router()

// ...colocar otros endpoints de este router aquí!
// 1. agregar un link a esta página en index
// 2. agregar el endpoint /reset_password en sessions.router

router.get('/reset_password', (_, res) => {
    // TODO: agregar middleware, sólo se puede acceder si no está logueado
    res.render('reset_password', {
        title: 'Reset password'
    })
})

module.exports = router