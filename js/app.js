/*
 * Create a list that holds all of your cards
 */
var cardDeck = ['leaf', 'leaf',
    'diamond', 'diamond',
    'paper-plane-o', 'paper-plane-o',
    'anchor', 'anchor',
    'bolt', 'bolt',
    'cube', 'cube',
    'bicycle', 'bicycle',
    'bomb', 'bomb'
];
var currentCard = [];
var matchedCards = [];

// defining variable for move count
let moves = 0;
let counter = document.getElementById('moves');

// Shuffle function from http://stackoverflow.com/a/2450976
startGame ();
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//shuffle the list of cards


//loop through each card on the list
//create HTML for each card and add to page
function gridBuilder() {
    document.getElementById('deck').innerHTML="";
    for (i = 0; i < cardDeck.length; i++) {
    var card = document.createElement('li');
    card.classList.add('card');
    card.dataset.symbol = cardDeck[i];

    var cardContent = document.createElement('i');
    cardContent.classList.add('fa', 'fa-' + cardDeck[i]);

    card.appendChild(cardContent);
    document.getElementById('deck').appendChild(card);
}}

//flip over card on click
function openCard(card) {
    card.classList.add('open', 'show');
}

// move counter that increases by 1 everytime 2 cards are clicked
function moveCounter() {

    moves++;
    counter.innerHTML = moves;
};

//modal function for if win condition is met
function congratulations() {
    if (matchedCards.length === 16) {
        //trigger win condition
        alert('this is an alert');
    }
};




//reset the card's classes and the move counter
function startGame() {
    currentCard =[];
    moves = 0;
    counter.innerHTML = moves;
    shuffle(cardDeck);
    for (i = 0; i < matchedCards.length; i++) {
        matchedCards[i].classList.remove('open', 'show', 'match');
    }
    gridBuilder();
    matchedCards = [];
}




var gameBoard = document.getElementById('deck');

gameBoard.addEventListener('click', function (event) {
    if (event.target.tagName == "LI" && (!event.target.classList.contains('open') && (currentCard.length != 2))) {

        {
            openCard(event.target);

            currentCard.push(event.target);
            if (currentCard.length === 2) {
                setTimeout(compare, 1000);
                moveCounter();
            }

        }
    }
})

//compare the two flipped cards to determine a match
function compare() {
    //if cards match
    if (currentCard[0].innerHTML === currentCard[1].innerHTML) {
        currentCard[0].classList.add('match');
        currentCard[1].classList.add('match');
        matchedCards.push(currentCard[0], currentCard[1]);
        congratulations();
    //if cards are not a match
    } else {
        currentCard[0].classList.remove('open', 'show');
        currentCard[1].classList.remove('open', 'show');
    }
    //reset empty array when two cards are clicked
    currentCard = [];

}





/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */