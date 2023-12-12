var player1 = { health: 100 };
var player2 = { health: 100 };
var allCards = [];
var card = {
    name: "",
    attack: 0,
    health: 0,
    img: "",
    rank: 1
};

var tinyKnight = Object.assign({}, card, {
    name: "Tiny Knight",
    attack: 1,
    health: 2,
    img: "card-images/littleknight.jpg",
    rank: 1
});

var superNinja = Object.assign({}, card, {
    name: "Super Ninja",
    attack: 2,
    health: 1,
    img: "card-images/4_WEAPON_NINJA.png",
    rank: 1
});

var demonEyeball = Object.assign({}, card, {
    name: "Demon Eyeball",
    attack: 0,
    health: 3,
    img: "card-images/eyeball.jpg",
    rank: 1
});

var sword = Object.assign({}, card, {
    name: "Sword",
    img: "card-images/REALSWORD1.png",
    rank: 2
})

AddToAllCards(tinyKnight);
AddToAllCards(superNinja);
AddToAllCards(demonEyeball);
AddToAllCards(sword);

var player1Deck = [];
console.log(player1Deck);

// CARD OPTION BUTTONS
const buttons = document.querySelectorAll('.btn');

// CLICK HANDLER
function handleClick(button) {
    const randomCard = JSON.parse(button.getAttribute('data-random-card'));
    player1Deck.push(randomCard);

    updatePlayerDeck(); // Call the updatePlayerDeck function to update the list
    updateDeckCount();
    resetButtonCards();
}

function updatePlayerDeck() {
    const deckList = document.getElementById('player-deck');
    deckList.innerHTML = ""; // Clear the list

    player1Deck.forEach((card) => {
        const listItem = document.createElement('li');
        listItem.textContent = card.rank + " " + card.name;
        deckList.appendChild(listItem);
    });

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
    button.setAttribute("data-card-index", index);
    button.setAttribute("data-random-card", JSON.stringify(randomCard));

    // Update the card name elements with the chosen card's name
    var cardNameElement = document.getElementById(`card-name-${index + 1}`);
    cardNameElement.textContent = randomCard.name;

    // Update the card text elements with the chosen card's attack and health values
    var cardTextElement = document.getElementById(`card-text-${index + 1}`);
    cardTextElement.textContent = `RANK: ${randomCard.rank}, ATK: ${randomCard.attack}, HP: ${randomCard.health}`;

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

    assignedCards.push(randomCard); // Add the card to the assignedCards array
    return randomCard;
}

function updateDeckCount(){
    const deckCountElement = document.getElementById('deck-text');
    deckCountElement.textContent = "Deck: " + player1Deck.length + " / 20";
}

function resetButtonCards() {
    assignedCards = [];

    if (player1Deck.length === 20) {
        document.body.innerHTML = ""; // Clear the entire site
    } else {
        buttons.forEach((button, index) => {
            var randomCard = getRandomCardUnique();

            button.setAttribute("data-card-index", index);
            button.setAttribute("data-random-card", JSON.stringify(randomCard));

            button.innerHTML = ""; // Clear the button content

            // Update the card name elements with the chosen card's name
            var cardNameElement = document.getElementById(`card-name-${index + 1}`);
            cardNameElement.textContent = randomCard.name;

            // Update the card text elements with the chosen card's attack and health values
            var cardTextElement = document.getElementById(`card-text-${index + 1}`);
            cardTextElement.textContent = `RANK: ${randomCard.rank}, ATK: ${randomCard.attack}, HP: ${randomCard.health}`;

            var cardImg = new Image();
            cardImg.src = randomCard.img;
            button.appendChild(cardImg);
        });
    }
}