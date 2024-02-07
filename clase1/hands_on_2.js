class Contador {

    constructor(responsable) {
        this.responsable = responsable;
        this.conteo = 0;
    }

    // inicializar la propiedad estática con el valor 0
    static conteoGlobal = 0;

    getResponsable() {
        return this.responsable;
    }

    getCuentaIndividual() {
        return this.conteo;
    }

    contar() {
        this.conteo += 1;

        // cada vez que incremento una cuenta, también sumo a la cuenta global
        // recordad que la variable estática es compartida por todas las instancias
        Contador.conteoGlobal += 1;
    }

    getCuentaGlobal() {
        return Contador.conteoGlobal
    }
}

const c1 = new Contador("Gonzalo")
const c2 = new Contador("Pedro")

c1.contar()
c1.contar()
c1.contar()

c2.contar()

console.log(`Cuenta de ${c1.getResponsable()}: ${c1.getCuentaIndividual()}`)
console.log(`Cuenta de ${c2.getResponsable()}: ${c2.getCuentaIndividual()}`)

console.log(`Cuenta global: ${c1.getCuentaGlobal()}`)
console.log(`Cuenta global: ${c2.getCuentaGlobal()}`)