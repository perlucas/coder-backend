const fs = require('fs')
const crypto = require('crypto')

const filename = './Usuarios.json'

const SECRET_KEY = 'coderhouse'

const createHashedValue = value => crypto
    .createHmac('sha256', SECRET_KEY)
    .update(value)
    .digest('hex')

class UserManager {
    async createUser(name, lastname, username, password) {
        const hashedPassword = createHashedValue(password)

        const user = {
            name,
            lastname,
            username,
            password: hashedPassword
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

    async validateCredentials(username, password) {
        const hashedPassword = createHashedValue(password)

        const users = await this.readUsers()
        const thisUser = users.find(u => u.username === username && u.password === hashedPassword)
        if (thisUser) {
            console.log(`Bienvenido/a ${thisUser.name} ${thisUser.lastname}`)
            return
        }

        console.error(`Error! Username or password incorrect!`)
    }
}


// testing
const main = async () => {
    const manager = new UserManager()
    console.log(await manager.readUsers())

    await manager.createUser('Peter', 'Parker', 'peterp', 'Spiderman1')
    await manager.createUser('John', 'Travolta', 'johnt8', 'JTravolt4')

    await manager.validateCredentials('peterp', 'Spiderman1')
    await manager.validateCredentials('peterp', 'Spiderman2')

    // console.log(await manager.readUsers())
}

main()