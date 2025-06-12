// ARRAYS

let featuredPosts = ["Check out my Netflix clone", "Here's the code for my project", "I've just launched my portfolio!"];

console.log(featuredPosts.length)

let myself = ["Lucas", 19, true]

let cards = [7, 4]

cards.push(6)

console.log(cards);

let messages = [
    "Hey, how's it going?",
    "I'm great, thanks for asking!, How about you?",
    "All good, thanks!", 
    "I am happy for you!",
]

let newMessage = "Same here!"

//messages.push(newMessage)

//console.log(messages);

//messages.pop()
//console.log(messages);

for(let i = 0; i < messages.length; i++) {
    console.log(messages[i])
}

// LOOPS

for (let count = 0 ; count <= 20; count += 10) {
    console.log(count);
}

for (let i = 10; i < 101; i += 10) {
    console.log(i);
}

// RETURNING VALUES

let player1Time = 102;
let player2Time = 107;

function getFastest() {
    if(player1Time < player2Time) {
         return "Player 1 is the fastest runner!";
    } else if (player2Time < player1Time) {
        return "Player 2 is the fastest runner!";
    } else {
        return "Both players are equally fast!";
    }
}

//let fastest = getFastest();
//console.log(fastest);

function totalRaceTime() {
    return player1Time + player2Time;
}

let total = totalRaceTime();
console.log(total);