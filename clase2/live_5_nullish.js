const personas = [
    {
        nombre: "Pedro González",
        edad: 25,
        puesto: {
            nombre: "Cajero",
            diasExperiencia: 560,
            responsable: {
                nombre: "Javier Pérez"
            }
        }
    },
    {
        nombre: "Matías Fernández",
        edad: 30
        // no tiene puesto
    },
    {
        nombre: "Sofía Morales",
        edad: 27,
        puesto: {
            nombre: "Vendedora",
            diasExperiencia: 460,
        }
    },
]

// mostrar resumen
for (const persona of personas) {

    console.log(`Nombre: ${persona.nombre}`)
    // persona?.puesto?.nombre
    if (persona.puesto && persona.puesto.nombre) {
        console.log(`Puesto: ${persona.puesto.nombre}`)
    }

    // persona?.puesto?.responsable?.nombre
    if (
        persona.puesto &&
        persona.puesto.responsable &&
        persona.puesto.responsable.nombre
    ) {
        console.log(`Responsable: ${persona.puesto.responsable.nombre}`)
    }

    console.log('\n')
}