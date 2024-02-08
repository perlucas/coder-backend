const names = ["John", "Peter", "Maria"]
console.log(names)

// map acepta como parámetro un callback, que puede ser una función anónima (como en este caso)
const saludos = names.map(name => `Hola, ${name}`)
console.log(saludos)

// ejemplo de uso de map con una función definida (sayGoodbye)
const sayGoodbye = name => `Goodbye, ${name}`
console.log(names.map(sayGoodbye))