const users = [
    {
        user: 'coderUser',
        password: '123'
    }
]

const login = (user, pass) => {
    /**
     * 1. password vacío => 'No se ha proporcionado un password'
     * 2. usuario vacío => 'No se ha proporcionado un usuario'
     * 3. password incorrecto => 'Contraseña incorrecta'
     * 4. usuario inexistente => 'Credenciales incorrectas'
     * 5. usuario y password válidos => 'Logueado'
     */
    return 'Sin implementar!'
}

module.exports = { login }