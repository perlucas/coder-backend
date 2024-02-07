// 1) Uso del operador spread para combinar objetos

const empleado = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 29,
    nacionalidad: "Argentino"
}

const puesto = {
    nombrePuesto: "Cajero",
    nivelResponsabilidad: "Medio",
    puestoSuperior: "Gerente"
}

// combinar ambos objetos
const empleadoYPuesto = { ...empleado, ...puesto }
console.log(empleadoYPuesto)

// 2) Sobreescribir valores con el spread operator
const configuracionPorDefecto = {
    hoja: 'A4',
    color: false,
    contraste: 15,
    incluirFechaHora: false
}

const configuracion1 = {
    ...configuracionPorDefecto,
    hoja: 'A3' // este valor "pisa" al valor A4 por defecto
}
console.log(configuracion1)

const configuracion2 = {
    ...configuracionPorDefecto,
    color: true,
    contraste: 30
}
console.log(configuracion2)

// 3) Copiar elementos de un array
const precios = [33.55, 40, 41.2]
const preciosActualizados = [...precios, 50]
console.log(preciosActualizados)