const fs = require('fs')

// TODO_3: crear un user manager que use MongoDB como persistencia
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
        // TODO_1: implementar filtros
        return this.#users
    }

    async deleteById(id) {
        // TODO_1: implementar!
    }

    async addUser(user) {
        // TODO_1: implementar!
    }

    async getByEmail(email) {
        // TODO_2: implementar!
    }
}

module.exports = UserManager