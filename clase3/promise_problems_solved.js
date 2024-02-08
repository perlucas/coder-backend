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

const tarea = async () => {
    try {
        // Promise.all nos permite paralelizar las tareas de cada promise
        const [empleados, puestos] = await Promise.all([obtenerEmpleados(), obtenerPuestos()])

        // podemos reutilizar la variable puestos
        return {
            empleados: empleados.map(e => {
                return { ...e, puesto: puestos.find(p => p.id === e.idPuesto) }
            }),
            numPuestos: puestos.length
        }
    }
    catch (err) {
        console.error(err)
    }
}

tarea()
    .then(console.log)