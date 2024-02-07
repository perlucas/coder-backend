// ejemplo informativo sobre cómo se utilizaban las closures para simular el mecanismo de clases
// en ES5 y versiones anteriores. Esto no es relevante para el curso, pero es bueno saberlo por si nos
// toca trabajar con código viejo (legacy) en el ambiente laboral.

function crearPersona(nombre, edad) {

    const persona = {
        edad,
        nombre,

        getNombre: function () { return this.nombre },

        getEdad: function () { return this.edad },

        envejecer: function () {
            this.edad += 1
        }
    }

    return persona
}

const p = crearPersona("Augusto", 27);

console.log(p.getNombre()) // Augusto
console.log(p.getEdad()) // 27
p.envejecer()

console.log(p.getEdad()) // 28
