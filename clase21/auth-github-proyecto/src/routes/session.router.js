const { Router } = require('express')
const router = Router()

router.get('/logout', (req, res) => {
    req.session.destroy(_ => {
        res.redirect('/')
    })
})

module.exports = router