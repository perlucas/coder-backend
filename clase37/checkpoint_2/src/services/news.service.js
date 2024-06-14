const { News } = require("../dto/news.dto")
const { logger } = require("../logger")

class NewsService {

    constructor(dao) {
        this.dao = dao
    }

    /**
     * 
     * @param {String} title 
     * @returns {[News]}
     */
    search(title) {
        return this.dao.searchByTitle(title)
    }

    async synchronizeNews(provider) {
        try {
            const newsToUpsert = await provider.fetchNews()

            await this.dao.upsertNewsByTitle(newsToUpsert)
        }
        catch (err) {
            logger.error('Error fetching news!')
            logger.error(err)
        }
    }
}

module.exports = { NewsService }