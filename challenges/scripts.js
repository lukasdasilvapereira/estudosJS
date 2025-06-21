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

// CREATE TWO VARIABLES , FIRSTCARD AND SECOND CARD
// SET THEIRS VALUES TO A RANDON NUMBER BETWEEN 2 AND 11

// 2- CREATE A VARIABLE, SUM , AND SET IT TO THE SUM OF THE TWO CARDS

let firstCard = 2
let secondCard = 8

let sum = firstCard + secondCard;
console.log(sum)

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
    console.log("Wohoo! You've got a Blackjack! 🎉");
} else {
    console.log("You're out of the game! 😵");
}

// CHECK IF THE PERSON IS OLD ENOUGH TO ENTER THE CLUB (21)
let age = 22;

if (age <= 20) {
    console.log("Sorry, you are not allowed to enter the club.");
} else {
    console.log("Welcome to the club! 🎉");
}

// CHECK IF THE PERSON IS ELEGIBLE FOR A BITHDAY CARD FROM THE KING! (100)

let ages = 100;

if (ages === 100) {
    console.log("You get a birthday card from the King! 👑");
} else if (ages < 100) {
    console.log("Sorry, you are not eligible for a birthday card from the King.");
} else {
    console.log("You already received a birthday card from the King! 🎂");
}

// LOOPS

let cards = [7, 3, 9];

for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
}

// RANDOM NUMBERS

let randonNumber = Math.floor(Math.random() * 6)
console.log(randonNumber);

// MATH FLOOR

let flooredNumber = Math.floor(4);
console.log(flooredNumber);

let randon = Math.floor(Math.random() * 6) + 1

console.log(randon)

// CREATE A FUNCTION , ROLLDICE() , THAT RETURNS A RANDON NUMBER BETWEEN 1 AND 6

function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    return roll
}

rollDice();

// TEMPLATE STRINGS

const recipient = "James";
const sender = "Lucas";

const email =

    `Hey ${recipient}!

How is it going?

Cheers ${sender}
`

console.log(email)

