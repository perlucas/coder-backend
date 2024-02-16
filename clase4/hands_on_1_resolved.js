const fs = require('fs')

const filename = './Usuarios.json'

class UserManager {
    async createUser(name, lastname, age, course) {
        const user = {
            name,
            lastname,
            age,
            course
        }

        const users = await this.readUsers()
        users.push(user)

        await fs.promises.writeFile(filename, JSON.stringify(users, null, '\t'))
    }

    async readUsers() {
        try {
            const usersFileContent = await fs.promises.readFile(filename, 'utf-8')
            return JSON.parse(usersFileContent)
        }
        catch (err) {
            return []
        }
    }
}


// testing
const main = async () => {
    const manager = new UserManager()
    console.log(await manager.readUsers())

    await manager.createUser('Peter', 'Parker', 30, 'Backend Node')
    await manager.createUser('John', 'Travolta', 40, 'Java')

    console.log(await manager.readUsers())
}

main()