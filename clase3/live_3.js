const sum = (a,b) => a+b
const sub = (a,b) => a-b
const mult = (a,b) => a*b
const div = (a,b) => a/b

const applyOperation = (a, b, operation) => {
    return operation(a,b)
}


console.log(applyOperation(5, 4, sum))
console.log(applyOperation(5, 4, sub))
console.log(applyOperation(5, 4, mult))
console.log(applyOperation(50, 2, div))
