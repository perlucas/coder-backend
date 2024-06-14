const { mongoUri, dbName } = require('../config')
const mongoose = require('mongoose')
const { NewsDao } = require("../dao/news.dao")
const { logger } = require("../logger")
const { NewsService } = require("../services/news.service")
const { NewsAPIProvider } = require("../services/newsProvider")

const newsService = new NewsService(
    new NewsDao()
)

const newsProvider = new NewsAPIProvider()


const main = async () => {
    await mongoose.connect(mongoUri, { dbName })

    await newsService.synchronizeNews(newsProvider)
}

main()
    .then(() => logger.info('News have been synchronized!'))
    .catch(() => logger.info('Error synchronizing news!'))
    .finally(() => process.exit())