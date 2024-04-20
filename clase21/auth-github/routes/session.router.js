const { Router } = require('express')
const passport = require('passport')
const router = Router()

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }), () => { })

router.get('/githubcallback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
    req.session.user = { _id: req.user._id }
    res.redirect('/')
})

router.get('/logout', (req, res) => {
    req.session.destroy(_ => {
        res.redirect('/')
    })
})

module.exports = router