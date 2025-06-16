// OBJECTS

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log(course.length)

let castle =  {
    title: "Live like a king in my castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle1.png", "img/castle2.png" ]
}

console.log(castle.price)
console.log(castle.isSuperHost)

let person = {
    name: "Lucas", 
    age: 19,
    country: "Brasil"
}

function logData() {
    console.log(`${person.name} is ${person.age} years old and lives in ${person.country}`)
}

logData();

function busTicket() {

let age = 55;

    if(age < 6) {
        return "Free";
    } else if(age < 18) {
        return "Child Discount"
    } else if(age < 27) {
        return "Student Discount"
    } else if(age < 67) {
        return "Full Price"
    } else {
        return "Senior Citizen Discount"
    }
}

console.log(busTicket());

// LOOPS CHALLENGES

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

for (let i = 0; i < largeCountries.length; i++) {
    console.log("-" + largeCountries[i])
}


let largeCountriee = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

largeCountriee.pop()
largeCountriee.push("Pakistan")
largeCountriee.shift()
largeCountriee.unshift("China")


console.log(largeCountriee)

// IF CHALLENGE

let dayOfMonth = 13;
let weekDay = "Friday";

if(dayOfMonth === 13 && weekDay === "Friday") {
    console.log("It is FRIDAY 13TH 😨")
} else {
    console.log("It is just a normal day")
}

// ROCK PAPER AND SCISSOR

let hands = ["Paper", "Rock", "Scissor"];
let hands2 = ["Paper", "Rock", "Scissor"]

function getHand1() {
    let random = Math.floor(Math.random() * 3)
    return hands[random]
}

function getHand2() {
    let random = Math.floor(Math.random() * 3)
    return hands2[random]
}

console.log(getHand1())
console.log(getHand2())

