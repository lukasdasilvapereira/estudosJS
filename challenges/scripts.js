let firstName = "Lucas";
let lastName = "Pereira";
let fullName = `${firstName} ${lastName}`;

console.log(fullName);

let name = "Lucas";
let greeting = "Hi there";

function greet() {
    let message = `${greeting}, ${name}!`;
    console.log(message);
}

greet();

// INCREMENTING AND DECREMENTING

let myPoints = 3;

function add3Points() {
    myPoints += 3;
}

function remove1Point() {
    myPoints -= 1;
}

add3Points();
remove1Point();
add3Points();
remove1Point();
add3Points();

console.log(myPoints);