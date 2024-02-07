class TicketManager {
    #eventos
    #precioBaseDeGanancia = 0.15

    static #ultimoIdEvento = 1

    constructor() {
        this.#eventos = []
    }

    getEventos() {
        return this.#eventos
    }

    #getNuevoId() {
        const id = TicketManager.#ultimoIdEvento
        TicketManager.#ultimoIdEvento++
        return id
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = null) {
        const evento = {
            id: this.#getNuevoId(),
            nombre,
            lugar,
            precio: precio + precio * this.#precioBaseDeGanancia,
            capacidad,
            fecha: fecha || new Date(),
            participantes: []
        }

        this.#eventos.push(evento)
    }

    agregarUsuario(idEvento, idUsuario) {
        // validar que el evento exista
        const evento = this.#eventos.find(evt => evt.id === idEvento)
        if (!evento) {
            return
        }

        // validar que el usuario no esté agregado
        if (evento.participantes.includes(idUsuario)) {
            return
        }
        evento.participantes.push(idUsuario)
    }

    ponerEventoEnGira(idEvento, localidad, fecha) {
        const evento = this.#eventos.find(evt => evt.id === idEvento)
        if (!evento) {
            return
        }

        const nuevoEvento = {
            ...evento,
            lugar: localidad,
            fecha,
            participantes: [],
            id: this.#getNuevoId()
        }

        this.#eventos.push(nuevoEvento)
    }
}

// Testing de la clase
const ticketManager = new TicketManager()
ticketManager.agregarEvento('Tomorrowland', 'Canadá, Ottawa', 120) // evento #1
ticketManager.agregarEvento('Rally Dakar', 'Perú, Lima', 50, 20, new Date(2024, 6, 15)) // evento #2
ticketManager.agregarEvento('Cine: La Casa de Papel', 'Argentina, Córdoba', 25.5, 200) // evento #3

ticketManager.agregarUsuario(1, 100)
ticketManager.agregarUsuario(1, 200)
ticketManager.agregarUsuario(1, 100) // ya ha sido agregado
ticketManager.agregarUsuario(10, 100) // evento inexistente

ticketManager.agregarUsuario(2, 200)

ticketManager.agregarUsuario(3, 300)

ticketManager.ponerEventoEnGira(1, 'EEUU, New York', new Date(2024, 10, 15)) //evento #4

console.log(ticketManager.getEventos())