const { Router } = require('express')

const router = Router()

const pets = [
    { id: 100, name: 'Poppy', type: 'dog' },
    { id: 200, name: 'Manchita', type: 'cat' },
    { id: 300, name: 'Fishy', type: 'fish' }
]

router.get('/', (req, res) => {
    res.status(200).json(pets)
})

router.post('/', (req, res) => {
    const pet = req.body
    console.log(pet)

    pet.id = Number.parseInt(Math.random() * 1000)

    pets.push(pet)

    res.status(201).json(pet)
})

module.exports = router