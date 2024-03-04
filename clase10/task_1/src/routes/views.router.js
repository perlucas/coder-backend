const { Router } = require('express')

const router = Router()

router.get('/', (_, res) => {
    
    res.render('index', {
        useSocketIO: true,
        scripts: [
            'index.js'
        ]
    })
})

module.exports = router