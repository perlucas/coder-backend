const { Router } = require('express')

const router = Router()

const pets = [
    { name: 'Poppy', specie: 'rabbit' },
    { name: 'Firulais', specie: 'dog' },
    { name: 'Pelusa', specie: 'cat' },
    { name: 'Harold', specie: 'hamster' },
]


router.post('/', (req, res) => {
    const { name, specie } = req.body
    pets.push({ name, specie })
    res.status(201).send({ name, specie })
})


router.param('pet', (req, _, next, petName) => {
    console.log(petName)
    const pet = pets.find(p => p.name === petName)
    req.pet = pet ? pet : null
    next()
})

router.get('/:pet([a-zA-Z%20]+)', (req, res) => {
    const pet = req.pet

    res
        .status(pet ? 200 : 404)
        .send(pet ? pet : { error: 'Not found' })
})

router.put('/:pet([a-zA-Z%20]+)', (req, res) => {
    if (!req.pet === -1) {
        return res.sendStatus(404)
    }

    const index = pets.findIndex(p => p.name === req.pet.name)
    pets[index] = { ...pets[index], adopted: true }

    res
        .status(200)
        .send(pets[index])
})

router.get('*', (req, res) => {
    res.sendStatus(404)
})


module.exports = router