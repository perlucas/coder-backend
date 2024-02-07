class Persona {
    // variables privadas
    #nombre
    #edad

    constructor(nombre, edad, pais) {
        this.#nombre = nombre
        this.#edad = edad
        this.pais = pais
    }

    getNombre() {
        return this.#nombre
    }

    getEdad() {
        return this.#edad
    }
}

const p = new Persona("Lucas", 28, "Argentina")

console.log(`Nombre: ${p.getNombre()}`)
console.log(`Edad: ${p.getEdad()}`) // No se puede acceder via p.edad o p.#edad, la unica forma es con el método
console.log(`Pais: ${p.pais}`) // pais no es privada, asique podemos accederla así