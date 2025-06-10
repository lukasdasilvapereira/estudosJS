let firstCard = 10
let secondCard = 11
let hasBlackJack = false
let isAlive = true
let message = "";
let messageEl = document.getElementById("message");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let sum = firstCard + secondCard;
console.log(sum);

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got a Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    let thirdCard = 5

    sum += thirdCard;
    renderGame()
}
