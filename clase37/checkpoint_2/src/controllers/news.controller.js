const { NewsDao } = require("../dao/news.dao")
const { logger } = require("../logger")
const { NewsService } = require("../services/news.service")
const { NewsAPIProvider } = require("../services/newsProvider")
const child_process = require('child_process')

const newsService = new NewsService(
    new NewsDao()
)

module.exports = {
    /**
     * 
     * @type {import("express").RequestHandler}
     */
    search: async (req, res) => {
        try {
            const title = req.query.title

            const news = await newsService.search(title)

            return res.json(news)
        }
        catch (err) {
            logger.error(err)
            return res.status(500).json({ message: 'Something went wrong!' })
        }
    },

    configureJobs: () => {
        setInterval(() => {

            child_process.fork(`${__dirname}/../scripts/syncNews`, { env: process.env })

        }, 1 * 60000) // every 5 mins.
    }
}