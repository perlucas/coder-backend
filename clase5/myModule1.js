const stringNotEmpty = s => {
    if (!s || !s.length) {
        throw new Error('String vacío!')
    }

    return true
}

const myPrivate = 10e5 // ésta constante no se compartirá

class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }

    getName() { return this.name }
    
    getAge() { return this.age }
}

// module.exports es un objeto especial que nos brinda Node, para poder especificar el código que queremos exportar (compartir)
// desde éste archivo. Cada propiedad de éste objeto, podrá ser utilizada por otros archivos.
// No es necesario que exportemos todo (como la variable "myPrivate", que no puede ser usada por otros archivos)
module.exports = {

    positiveNumber(n) {
        if (n > 0) {
            return true
        }

        throw new Error('El número debe ser positivo')
    },

    stringNotEmpty,

    Person
}