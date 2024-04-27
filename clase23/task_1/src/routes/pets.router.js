const { Router } = require('express')

const router = Router()

const pets = [
    { name: 'Poppy', specie: 'rabbit' },
    { name: 'Firulais', specie: 'dog' },
    { name: 'Pelusa', specie: 'cat' },
    { name: 'Harold', specie: 'hamster' },
]


router.post('/', (req, res) => {
    res.sendStatus(201)
})


router.get('/:pet', (req, res) => {
    res.sendStatus(200)
})

router.put('/:pet', (req, res) => {
    res.sendStatus(200)
})

router.get('*', (req, res) => {
    res.sendStatus(404)
})


module.exports = router