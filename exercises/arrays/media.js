let notas = [5, 7, 4, 10];


const total = notas.reduce((acurrator, nota) => {
    return acurrator + nota
}, 0)

console.log(total)
console.log(total / notas.length)