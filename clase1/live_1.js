// el siguiente código fallará porque estamos reasignando una variable tipo const
// const str = "Bienvenidos"
// str = "Adiós"

// el siguiente código no fallará, porque estamos modificando el objeto contenido en la variable
// no estamos reasignando la variable
const miArreglo = ["Un", "Dos", "Tres"]

// podemos usar el método freeze para no permitir que un objeto pueda ser modificado
// Object.freeze(miArreglo) // --> convertir un objeto en inmutable

miArreglo.push("Cuatro")

console.log(miArreglo)