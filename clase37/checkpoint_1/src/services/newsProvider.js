const NewsApi = require('newsapi')

class NewsAPIProvider {

    constructor() {
        this.newsApi = new NewsApi(process.env.NEWS_API_KEY)
    }

    async fetchNews() {
        const response = await this.newsApi.v2.topHeadlines({
            category: 'technology',
            country: 'us',
            pageSize: 50
        })

        const { articles } = response

        return articles.map(a => ({ title: a.title, description: a.description || '', url: a.url }))
    }

}

module.exports = { NewsAPIProvider }