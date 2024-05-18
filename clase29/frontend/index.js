fetch('http://localhost:8080/api/orders')
    .then(r => r.json())
    .then(data => {
        const { payload: orders } = data

        const fragment = document.createDocumentFragment()
        orders.forEach(order => {
            const div = document.createElement('div')

            const priceParagraph = document.createElement('p')
            priceParagraph.innerHTML = `Total de la orden: ${order.totalPrice}`

            const statusParagraph = document.createElement('p')
            statusParagraph.innerHTML = `Estado: ${order.status}`


            const numberParagraph = document.createElement('p')
            numberParagraph.innerHTML = `Orden número ${order.number}`

            div.appendChild(numberParagraph)
            div.appendChild(priceParagraph)
            div.appendChild(statusParagraph)

            fragment.append(div)
        })

        const container = document.getElementById('orders')
        container.appendChild(fragment)
    })
    .catch(console.error)