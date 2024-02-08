const empleados = [
    { id: 100, idPuesto: 1, nombre: 'Pedro Pérez' },
    { id: 200, idPuesto: 2, nombre: 'Pablo Hernández' }
]

const puestos = [
    { id: 1, nombre: 'Cajero' },
    { id: 2, nombre: 'Policía' },
    { id: 3, nombre: 'Doctor' }
]

// Consigna: devolver los empleados con sus puestos y el total de puestos

const obtenerEmpleados = () => new Promise((resolve, reject) => resolve(empleados))

const obtenerPuestos = () => new Promise((resolve, reject) => resolve(puestos))

obtenerEmpleados()
    .then(empleados => obtenerPuestos()
        .then(puestos => empleados.map(e => {
            const p = puestos.find(p => p.id === e.idPuesto)
            return { ...e, puesto: p }
        }))
        // problema 1: obtenerPuestos se está llamando luego de obtenerEmpleados
        // son 2 tareas independientes, obtener ambos datos podrían ejecutarse en paralelo
    )
    .then(empleados => obtenerPuestos()
        // problema 2: no puedo reutilizar variables entre promises, salvo que las guarde y vaya pasando entre una y otra
        // en este caso, volvimos a llamar a la operación obtenerPuestos
        .then(puestos => {
            return { empleados, numPuestos: puestos.length }
        })
    )
    .then(console.log)