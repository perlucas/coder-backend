const { Router } = require('express')
const { Estudiante } = require('../models')

const router = Router()

router.get('/', async (_, res) => {
    try {
        const estudiantes = await Estudiante.find()
        res.status(200).json({
            result: 'success',
            data: estudiantes
        })
    }
    catch (err) {
        res.status(500).json({
            result: 'error',
            info: err.message
        })
    }
})

router.post('/', async (req, res) => {
    let invalidFields = 0
    invalidFields += ['nombre', 'apellido', 'dni', 'curso'].filter(field => !req.body[field]).length
    invalidFields += ['edad', 'nota'].filter(field => isNaN(+req.body[field]) || +req.body[field] < 0).length

    if (invalidFields > 0) {
        res.status(400).json({
            result: 'error',
            message: 'Alguno de los campos es inválido!'
        })
        return
    }

    try {
        const nuevoEstudiante = await Estudiante.create(req.body)
        res.status(200).json({
            result: 'success',
            stats: nuevoEstudiante
        })
    }
    catch (err) {
        res.status(500).json({
            result: 'error',
            info: err.message
        })
    }
})

// TODO: implementa este endpoint tú mismo/a
// router.put('/', async (req, res) => {

// })

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const stats = await Estudiante.deleteOne({ _id: id })
        res.status(200).json({
            result: 'success',
            stats
        })
    }
    catch (err) {
        res.status(500).json({
            result: 'error',
            info: err.message
        })
    }
})


module.exports = router