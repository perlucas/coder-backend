class NewsService {

    constructor(dao) {
        this.dao = dao
    }

    search(title) {
        return this.dao.searchByTitle(title)
    }

    async synchronizeNews(provider) {

        try {
            const newsToUpsert = await provider.fetchNews()

            await this.dao.upsertNewsByTitle(newsToUpsert)
        }
        catch (err) {
            console.log('Error fetching news!')
            console.log(err)
        }
    }
}

module.exports = { NewsService }