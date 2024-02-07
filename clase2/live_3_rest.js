// 1) Extraer una propiedad de un objeto para trabajar y guardar las otras restantes
const persona = {
    nombre: "Juan Pérez",
    estadoCivil: "Soltero",
    edad: 50,
    ocupacion: "Policía"
}

const { nombre, ...datos } = persona
// la variable nombre ahora contiene el nombre de la persona
// la variable datos contiene las demas propiedades
console.log(nombre)
console.log(datos)





// 2) Obtener el 1er elemento de un array
const numeros = [10, 20, 30, 40]
const [primero, ...otros] = numeros
console.log(primero, otros)