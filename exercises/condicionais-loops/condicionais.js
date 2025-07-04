let sum = 2 + 10

if (sum === 5) {
    console.log("O valor é 5")
} else if (sum != 5 || sum === 4 ){
    console.log("O valor não é 5")
}

// TERNARY OPERATOR
let number = sum === 4 ? 5 : 12;

console.log(number)

// switch case

const car = "celta"

switch (car) {
    case "Mercedes":
        console.log("Mercedes is beatiful")
        break;
    default:
        console.log("This other car is beatiful too")
        break;
}