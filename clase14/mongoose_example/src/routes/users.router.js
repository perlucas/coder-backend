const { User } = require('../models')
const { Router } = require('express')

const router = Router()

router.get('/', async (_, res) => {
    try {
        const users = await User.find()
        res.json({
            result: 'success',
            users
        })
        return
    }
    catch (err) {
        console.error(err)
        res.json({
            result: 'error',
            message: 'cannot get users'
        })
    }
})

router.post('/', async (req, res) => {
    const { firstName, lastName, email } = req.body

    try {
        if (!firstName || !lastName || !email) {
            res.status(400).json({
                result: 'error',
                message: 'invalid fields!'
            })
            return
        }
    
        const newUser = await User.create({ firstName, lastName, email })
        res.status(201).json({
            result: 'success',
            stats: newUser
        })
    }
    catch (err) {
        res.status(500).json({
            result: 'error',
            message: err.message
        })
    }
})

module.exports = router