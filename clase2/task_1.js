const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]

// mostrar los distintos tipos de objetos, sin repetir
const tipos = []
objetos.forEach(objeto => {
    const keys = Object.keys(objeto)
    keys.forEach(k => {
        if (!tipos.includes(k)) {
            tipos.push(k)
        }
    })
})
console.log(tipos)

// mostrar el total de productos vendidos
let total = 0
objetos.forEach(objeto => {
    const values = Object.values(objeto)
    values.forEach(v => total += v)
})
console.log(`Total: ${total}`)
