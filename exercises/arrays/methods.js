const data = [
    {name: "Alice", age: 24, sallary: 2000, driverLicense: true},
    {name: "Lucas", age: 19, sallary: 0, driverLicense: false},
    {name: "Maria", age: 29, sallary: 5000, driverLicense: true},
    {name: "Jorge", age: 44, sallary: 5000, driverLicense: false},
    {name: "Elisa", age: 24, sallary: 1500, driverLicense: false},
]

// 1- REVERSE
const reversedData = data.reverse();

console.log(reversedData) // reverte a ordem do array

// 2- Find

const highSallary = 5000

const dataFind = data.find(item => {
    return item.sallary >= highSallary
}) // PROCURA O ELEMENTO SEGUNDO A CONDIÇÃO QUE PEDIMOS

console.log(dataFind)

// 3 - FINDINDEX

const lowestSallary = data.findIndex(item => {
    return item.sallary > 1 && item.sallary < 2000
})

data[lowestSallary].sallary += 250;

console.log(lowestSallary) // RETORNA O INDICE DO ELEMENTO QUE ATENDE A CONDIÇÃO

console.log(data)

// 4 - INCLUDES

const numbers = [1, 2, 3, 4, 5];

const hasFour = numbers.includes(4); // VERIFICA SE O VALOR EXISTE NO ARRAY

console.log(hasFour); // true

// 5- MAP

data.map(item => {
    (item.newsLetter = false)
});

console.log(data); // ADICIONA UMA PROPRIEDADE A TODOS OS OBJETOS DO ARRAy

data.map(user => {
    (user.lits = true)
})

console.log(data); // ADICIONA UMA PROPRIEDADE A TODOS OS OBJETOS DO ARRAY

// 6 - FILTER

const filterDriver = data.filter(item => {
return item.driverLicense === true
})

console.log(filterDriver); // FILTRA OS ELEMENTOS SEGUNDO A CONDIÇÃO QUE PEDIMOS

// 7 - REDUCE

const sallarysSum = data.reduce((current , item) => {
    return item.sallary + current
}, 0)

console.log(sallarysSum) // SOMA TUDO

// 8- FOR EACH

data.forEach(item => {
    console.log(item.name)
});


// 9 SOME(Boolean)

const hasNewsLetter = data.some(item => {
    return item.newsLetter === true
})

console.log(hasNewsLetter); // VERIFICA SE ALGUM ITEM ATENDE A CONDIÇÃO

// 10 - EVERY(Boolean)

const everyHasName = data.every(item => {
    return item.name === true
})

console.log(everyHasName); // VERIFICA SE TODOS OS ITENS ATENDEM A CONDIÇÃO
