const { NewsDao } = require("../dao/news.dao")
const { NewsService } = require("../services/news.service")
const { NewsAPIProvider } = require("../services/newsProvider")

const newsService = new NewsService(
    new NewsDao()
)

const newsProvider = new NewsAPIProvider()

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
            return res.status(500).json({ message: 'Something went wrong!' })
        }
    },

    configureJobs: () => {
        setInterval(() => {

            newsService.synchronizeNews(newsProvider)
                .then(() => console.log('News have been synchronized!'))
                .catch(() => console.log('Error synchronizing news!'))

        }, 1 * 60000) // every 5 mins.
    }
}