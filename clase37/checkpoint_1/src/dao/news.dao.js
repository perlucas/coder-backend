const NewsModel = require('../mongo/news.model')

class NewsDao {

    /**
     * 
     * @param {String} title 
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

    formatNewsModelToDto(news) {
        return {
            id: news._id,
            title: news.title,
            description: news.description,
            url: news.url
        }
    }

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