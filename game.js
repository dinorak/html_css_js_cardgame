//game

// Standard variables
var player1 = { health: 100 };
var player2 = { health: 100 };
var allCards = [];
var card = {
    'card name': "",
    attack: 0,
    health: 0,
    img: ""
};
var player1Deck = [];

//CARD OPTION BUTTONS
const buttons = document.querySelectorAll('.btn');

function handleClick(event) {
    const button = event.target;
    console.log("button pressed");
}

buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
});

//CARD CREATION
function selectCard(card) {
    player1Deck.push(card);
}

function AddToAllCards(card) {
    allCards.push(card);
}

// Function to create cards
function createCard(cardName, attack, health, img) {
    var card = {
        'card name': cardName,
        attack: attack,
        health: health,
        img: img
    };
    allCards.push(card);
}

// Create cards
createCard("Tiny Knight", 2, 4, "card-images/littleknight.jpg");
createCard("Demon Eyeball", 3, 3, "card-images/eyeball.jpg");
createCard("Super Ninja", 4, 4, "card-images/4_WEAPON_NINJA.png");

// Assign random cards to buttons on startup
var assignedCards = [];

buttons.forEach((button) => {
    var randomCard = getRandomCardUnique();
    assignedCards.push(randomCard);
    button.textContent = randomCard['card name'];

    // Create an image element and set its source
    var cardImg = new Image();
    cardImg.src = randomCard['img'];

    // Append the image element to the button
    button.appendChild(cardImg);
});

function getRandomCard() {
    var randomIndex = Math.floor(Math.random() * allCards.length);
    return allCards[randomIndex];
}

function getRandomCardUnique() {
    if (assignedCards.length == allCards.length) {
        assignedCards = [];
    }

    var randomCard = getRandomCard();
    while (assignedCards.includes(randomCard)) {
        randomCard = getRandomCard();
    }

    return randomCard;

}

