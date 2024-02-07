const mostrarLista = lista => {

    // la propiedad "length" de los arrays me permite saber el nro. de ítems que tiene
    const longitudLista = lista.length

    // devolver mensaje si la lista está vacía
    if (longitudLista === 0) {
        console.log("Lista vacía")

        // early return, como no tenemos que hacer más nada en este caso,
        // podemos finalizar la función aquí. De esta manera no tenemos que escribir un "else"
        // en este caso no estamos devolviendo nada desde la función, por eso no va nada a la derecha del "return"
        return
    }

    // iterar por cada elemento y mostrarlo
    for (const item of lista) {
        console.log(item)
    }
    // también podemos hacer lista.forEach(item => console.log(item))
    // también podemos hacer for (let i=0; i < lista.length; i++) { console.log(lista[i]); }
    
    // devolver longitud de la lista
    console.log(`La lista contiene ${longitudLista} ítems`)
}

mostrarLista([])
mostrarLista(["Benjamín", "Soledad", "Emilia"])
