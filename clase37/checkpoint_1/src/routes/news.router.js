const { Router } = require('express')
const { search, configureJobs } = require('../controllers/news.controller')

configureJobs()

const router = Router()

router.get('/search', search)

module.exports = router