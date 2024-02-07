// función tradicional
function mostrarMensaje1(nombre, pais) {
    console.log("Bienvenid@ " + nombre + " gracias por sumarte desde " + pais)
}

// función utilizando ES6 arrow functions, equivalente a la anterior
const mostrarMensaje2 = (nombre, pais) => {
    console.log("Bienvenid@ " + nombre + " gracias por sumarte desde " + pais)
}

mostrarMensaje1("Lucas", "Argentina")
mostrarMensaje2("Lucas", "Argentina")

// Función anónima, no le doy un nombre, se llama inmediatamente luego de declararla
// agrego este ejemplo sólo de manera informativa
// ;(function (nombre, pais) {
//     console.log("Bienvenid@ " + nombre + " gracias por sumarte desde " + pais)
// })("Lucas", "Argentina")