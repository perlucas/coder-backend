const fs = require('fs')

const filename = './Usuarios.json'

class UserManager {
    async createUser(name, lastname, age, course) {
       // obtener usuarios desde el archivo
       // agregar usuario nuevo
       // escribir archivo actualizado
    }

    async readUsers() {
       // leer archivo
       // devolver el array de objetos
       // devolver [] si no existe el archivo
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