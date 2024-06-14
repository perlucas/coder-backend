const NewsApi = require('newsapi')
const { News } = require('../dto/news.dto')

class NewsAPIProvider {

    constructor() {
        this.newsApi = new NewsApi(process.env.NEWS_API_KEY)
    }

    /**
     * 
     * @returns {[News]}
     */
    async fetchNews() {
        const response = await this.newsApi.v2.topHeadlines({
            category: 'technology',
            country: 'us',
            pageSize: 50
        })

        const { articles } = response

        return articles.map(a => new News(null, a.title, a.description || '', a.url))
    }

}

module.exports = { NewsAPIProvider }