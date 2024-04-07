const { Router } = require('express')

const router = Router()

router.post('/setCookie', (req, res) => {
    console.log(req.body)
    res.cookie(req.body.user, req.body.email, { maxAge: 10000 })
        .json({ status: 'success' })
})

router.get('/getCookie', (req, res) => {
    res.send(req.cookies)
})

router.get('/deleteCookie', (req, res) => {
    res.clearCookie('CoderCookie')
        .send('Cookie eliminada')
})

module.exports = router