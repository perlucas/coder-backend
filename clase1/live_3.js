class Persona {

    // propiedad estática = compartida entre todas las instancias de persona
    // puedo usarla haciendo Persona.nombreVariable
    static cantidad = 0;

    constructor(nombre) {
        this.nombre = nombre;

        Persona.cantidad++
    }

    saludar() {
        console.log(`Mucho gusto! Mi nombre es ${this.nombre}`)
    }
}

const p1 = new Persona("José")
const p2 = new Persona("María")

p1.saludar()
p2.saludar()

console.log(`En total se crearon ${Persona.cantidad} personas!`)