const fs = require('fs')

class UserManager {
    #path
    #users

    constructor(filepath) {
        this.#path = filepath
        this.#users = []
    }

    async prepare() {
        try {
            const fileContents = await fs.promises.readFile(this.#path, 'utf-8')
            const users = JSON.parse(fileContents)
            this.#users = users
        } catch (err) {
            this.#users = []
        }
    }

    async #updateFile() {
        await fs.promises.writeFile(
            this.#path,
            JSON.stringify(this.#users, null, 4)
        )
    }

    async getAll(filters = null) {
        const { genre, name } = { genre: null, name: null, ...filters }

        const filteredByGenre = genre
            ? this.#users.filter(u => u.genre === genre)
            : this.#users

        return name
            ? filteredByGenre.filter(u => u.name.startsWith(name))
            : filteredByGenre
    }

    async deleteById(id) {
        const index = this.#users.findIndex(u => u.id === id)
        if (index >= 0) {
            this.#users.splice(index, 1)
        }

        await this.#updateFile()
    }

    async addUser(user) {
        const { name, lastName, email, age, genre } = user
        const emailAlreadyStored = this.#users.findIndex(u => u.email === user.email) >= 0
        const invalidAge = isNaN(+age) || +age <= 0
        const invalidGenre = !['H', 'M'].includes(genre)

        if (!user.name || !user.lastName || !user.email || invalidAge || emailAlreadyStored || invalidGenre) {
            throw new Error('invalid user data')
        }

        this.#users.push({
            name,
            lastName,
            email,
            age: +age,
            genre,
            role: 'user',
            id: parseInt(Math.random() * 10000) + ''
        })

        await this.#updateFile()
    }

    async getByEmail(email) {
        return this.#users.find(u => u.email === email)
    }
}

module.exports = UserManager