const { Router } = require('express')
const Student = require('../models/student.model')

const router = Router()

router.get('/students', async (req, res) => {
    const page = req.query.page || 1
    console.log(await Student.paginate({}, { limit: 5, page, lean: true }))
    res.render('students', {
        title: 'Students!',
        data: await Student.paginate({}, { limit: 5, page, lean: true })
    })
})

module.exports = router