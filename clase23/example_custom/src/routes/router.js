const { Router } = require('express')

class BaseRouter {
    constructor() {
        this.router = Router()
        this.init()
    }

    getRouter() {
        return this.router
    }

    init() {
        // implementar este método en las clases hijas
    }

    get(path, ...callbacks) {
        // llamamos al router de express con el path, pero customizamos los callbacks
        this.router.get(path, this.customizeCallbacks(callbacks))
    }

    customizeCallbacks(callbacks) {
        // para cada callback, generamos un middleware que lo envuelve en un try/catch
        return callbacks.map(callback => async (...params) => {
            try {
                // apply es un método de los callbacks que permite llamarlos
                // si en el callback se llegase a utilizar "this", se utilizaría la referencia que le pasamos en el 1er argumento, osea esta clase
                // en el 2do argumento, le pasamos un array de parámetros que usa el callback
                await callback.apply(this, params)
            } catch (err) {
                console.log(error)

                // nuestra función flecha es un middleware también, entonces sabemos que params será [req, res, next]
                const [, res,] = params
                res.status(500).send(error)
            }
        })
    }
}

module.exports = BaseRouter