//document.getElementById("counter").innerText = "5";

//let firstBatch = 5;
//let secondBatch = 7;

//let count = firstBatch + secondBatch;

//console.log(count);

//1 - Create  a variable, Myage, and set its value to your age and log it to the console.

//let myAge = 19;

//console.log(myAge);

// create two variables , Myage and humandDogRatio and multiply them together, store the result in MyDogAge and log the result to the console.

let myAge = 19;
let humanDogRatio = 7;

let myDogAge = myAge * humanDogRatio;
console.log(myDogAge);

// INCREMENTING A VARIABLE

let count = 5;

count = count + 1;
console.log(count);

// create a variable, bonusPoints, Initialize it to 50, then increase it to 100, then decrement it by 25, then log the final value to the console.

let bonusPoints = 50;
bonusPoints = bonusPoints + 50; // Increase to 100
bonusPoints = bonusPoints - 75; // Decrement it to 25
bonusPoints = bonusPoints + 45; // Increase it to 70
console.log(bonusPoints); // Log the final value to the console

// UNDERSTANDING FUNCTIONS

// SETTING UP THE RACE

function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}

countdown();

// Create a function that logs out the numbrer 42 to the console

function invoke() {
    console.log(42);
}

invoke();

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

// Create a function that logs out the sum of all the lap times

function sumAll() {
    let sum = lap1 + lap2 + lap3;
    console.log(sum);
}

sumAll();

// Create a function that increments the lapsCompleted variable by 1 each time it is called

let lapsCompleted = 0;

function incrementLap() {
    lapsCompleted += 1;
    console.log(lapsCompleted);
}

incrementLap();
incrementLap();
incrementLap();

// Create a variable, message , that stores the string: "You have tree new notifications"

let username = "per";

let message = `You have three new notifications ${username}`;
console.log(message);

let myName = "Lucas";
let greeting = "Hi, my name is";
let myGreeting = `${greeting} ${myName}`;
console.log(myGreeting);
