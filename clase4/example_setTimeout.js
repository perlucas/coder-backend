const showMessage = () => console.log('Hello from timeout!')

console.log('Task 1')
console.log('Task 2')
console.log('Task 3')

// el código del callback showMessage es ejecutado luego de 2 segundos (2000 ms)
// mientras node espera que se cumplan esos 2 segundos, nuestra CPU va a estar esperando sin hacer nada
// entonces node decide usarla para continuar ejecutando las otras instrucciones, que en este caso son Task 4, 5 y 6
setTimeout(showMessage, 2000)

console.log('Task 4')
console.log('Task 5')
console.log('Task 6')