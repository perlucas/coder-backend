fetch('http://localhost:3000/api/numbers')
    .then(res => res.json())
    .then(data => {
        document.write(`Numbers: ${data.numbers.join(' ')}`)
    })
    .catch(console.error)