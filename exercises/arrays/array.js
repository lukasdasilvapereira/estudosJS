const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
]

const filtered = items.filter(item => {
    return item.price <= 100
}) // FILTRA OS ITENS SEGUNDO AS CONDIÇÕES QUE PEDIMOS

const itemNames = items.map(item => {
    return item.name
}) // PERCORRE PELO ARRAY E TRAZ OQ FOI PEDIDO

const foundItem = items.find(item => {
    return item.name === "Book"
}) // PERCORRE PELO ARRAY PRA ACHAR UM ELEMENTO

items.forEach(item => {
    console.log(item.price)
}) // PERCORRE PELO ARRAY INTEIRO

const hasExpensiveItems = items.some(item => {
    return item.price > 1000
}) // PARECIDO COM O EVERY 

const hasFreeItems = items.every(item => { 
    return item.price <= 0
}) // BUSCA CADA ITEM PRA TRAZER UM BOOLEAN

const total = items.reduce((current, item) => {
    return item.price + current
}, 0) // SERVE PRA CASO QUERER FAZER OPERAÇÕES  

console.log(total)
console.log(hasFreeItems)
console.log(hasExpensiveItems)
console.log(foundItem)
console.log(itemNames)
console.log(filtered)

const numbers = [1, 2 , 3 , 4]

console.log(numbers.length)
console.log(numbers)
numbers.push(5) // ADICIONA UM PARA O ULTIMO
numbers.pop() // REMOVE O ULTIMO
numbers.shift() // REMOVE O PRIMEIRO
numbers.unshift(1) // ADICIONA AO PRIMEIRO
console.log(numbers)
const including = numbers.includes(3) // BOOLEAN QUE PROCURA O VALOR ESPECIFICO QUE VOCE DEFINIU 
console.log(including)