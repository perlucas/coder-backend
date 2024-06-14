const { Router } = require('express')
const { search, configureJobs } = require('../controllers/news.controller')

if (process.env.JOBS_ENABLED) {
    configureJobs()
}

const router = Router()

router.get('/search', search)

module.exports = router