const { News } = require('../dto/news.dto')
const NewsModel = require('../mongo/news.model')

class NewsDao {

    /**
     * 
     * @param {String} title
     * @returns {[News]}
     */
    async searchByTitle(title) {
        const results = await NewsModel.find({
            title: {
                $regex: title,
                $options: 'i'
            }
        })

        return results.map(this.formatNewsModelToDto)
    }

    /**
     * 
     * @returns {News}
     */
    formatNewsModelToDto(news) {
        return new News(news._id.toString(), news.title, news.description, news.url)
    }

    /**
     * 
     * @param {[News]} newsArray 
     */
    async upsertNewsByTitle(newsArray) {
        for (const news of newsArray) {
            await NewsModel.updateOne(
                { title: news.title },
                { $set: { description: news.description, url: news.url, title: news.title } },
                { upsert: true }
            )
        }
    }
}

module.exports = { NewsDao }