// Standard variables
var player1 = { health: 100 };
var player2 = { health: 100 };
var allCards = [];
var card = {
    name: "",
    attack: 0,
    health: 0,
    img: ""
};

var tinyKnight = Object.assign({}, card, {
    name: "Tiny Knight",
    attack: 2,
    health: 4,
    img: "card-images/littleknight.jpg"
});

var superNinja = Object.assign({}, card, {
    name: "Super Ninja",
    attack: 3,
    health: 3,
    img: "card-images/4_WEAPON_NINJA.png"
});

var demonEyeball = Object.assign({}, card, {
    name: "Demon Eyeball",
    attack: 4,
    health: 2,
    img: "card-images/eyeball.jpg"
});

AddToAllCards(tinyKnight);
AddToAllCards(superNinja);
AddToAllCards(demonEyeball);

var player1Deck = [];
console.log(player1Deck);

// CARD OPTION BUTTONS
const buttons = document.querySelectorAll('.btn');

// CLICK HANDLER
function handleClick(button) {
    const randomCard = JSON.parse(button.getAttribute('data-random-card'));
    player1Deck.push(randomCard);

    // Remove the card from the available cards (allCards array)
    const cardIndex = allCards.findIndex((card) => card.name === randomCard.name);
    allCards.splice(cardIndex, 1);

    console.log(player1Deck);
}

buttons.forEach((button) => {
    button.addEventListener('click', function(event) {
        handleClick(button);
    });
});

function AddToAllCards(card) {
    allCards.push(card);
}

// Assign random cards to buttons on startup
var assignedCards = [];

buttons.forEach((button, index) => {
    var randomCard = getRandomCardUnique();
    button.textContent = randomCard.name;
    button.setAttribute("data-card-index", index);
    button.setAttribute("data-random-card", JSON.stringify(randomCard));

    // Create an image element and set its source
    var cardImg = new Image();
    cardImg.src = randomCard.img;

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

    assignedCards.push(randomCard);
    return randomCard;
}