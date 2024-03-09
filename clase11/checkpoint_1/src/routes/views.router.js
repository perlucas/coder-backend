const { Router } = require('express')

const router = Router()


router.get('/', (_, res) => {
    res.render('index', {
        title: 'Aplicación de chat',
        useWS: true,
        useSweetAlert: true,
        scripts: [
            'index.js'
        ]
    })
})


module.exports = router