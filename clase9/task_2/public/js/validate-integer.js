
document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelector('#validate')
        .addEventListener('click', () => {
            
            // 1. obtener el valor que el user ingresó
            const inputNumber = document.querySelector('#num').valueAsNumber
            
            const inputAsInteger = parseInt(inputNumber)
            
            // 2. validar el número, y mostrar el mensaje de error/success según corresponda
            const messageDiv = document.querySelector('#message')
            if (isNaN(inputNumber) || inputNumber !== inputAsInteger) {
                messageDiv.classList.remove('success') // clases definidas en el .css
                messageDiv.classList.add('error')
                messageDiv.textContent = 'El número no es entero!'
            } else {
                messageDiv.classList.add('success')
                messageDiv.classList.remove('error')
                messageDiv.textContent = 'El número es entero!'
            }
        })


})