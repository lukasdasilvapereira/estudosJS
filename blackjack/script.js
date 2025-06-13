let hasBlackJack = false
let isAlive = false
let cards = [];
let message = "";
let messageEl = document.getElementById("message");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let sum = 0;
let playerEl = document.getElementById("player-el")

let player = {
    name: "Lucas",
    chips: 145,
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let costume = Math.floor(Math.random() * 13) + 1
    if (costume > 10) {
        return 10;
    } else if (costume === 1) {
        return 11;
    }
    return costume
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {

    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
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
    if(isAlive === true && hasBlackJack === false) {
    let thirdCard = getRandomCard();

    cards.push(thirdCard)

    sum += cards[2];
    renderGame()
    }
}
