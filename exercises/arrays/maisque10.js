let numbers = [25, 5 , 7 , 23, 45, 102 , 7, 9 , 55]

const maisQueDez = numbers.filter(item => {
    return item < 10;
})

console.log(maisQueDez.length)
console.log(maisQueDez)