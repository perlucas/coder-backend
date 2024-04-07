const { Router } = require('express')

const router = Router()

router.get('/setCookie', (req, res) => {
res.cookie('CoderCookie', 'Cookie de prueba', { maxAge: 3 * 60 * 1000, /*signed: true*/ }) // 3 minutos
        .send('Cookie seteada')
})

router.get('/getCookie', (req, res) => {
    res.send(req.cookies)
})

router.get('/deleteCookie', (req, res) => {
    res.clearCookie('CoderCookie')
        .send('Cookie eliminada')
})

module.exports = router