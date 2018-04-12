/*
 * Create lists that holds all of your cards
 */
//selected cards
var currentCard = [];
//cards that have been matched
var matchedCards = [];

// defining variable for move count
let moves = 0;
let counter = document.querySelector('#moves');
//define variables for the game board and cards
let cardDeck = document.querySelectorAll('.card');
let gameBoard = document.querySelector('.deck');
//star list for rating
const stars = document.querySelector('.stars');
const starIndex = document.getElementsByClassName('fa-chess-rook');




//runs when page loads
startGame();

//flip over card on click
function openCard(card) {
    card.classList.add('open', 'show');
}

// move counter that increases by 1 everytime 2 cards are clicked
function moveCounter() {
    moves++;
    counter.innerHTML = moves;
//when 1 move is performed, start the timer    
    if (moves == 1) {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
//determine the "castle" rating depending on the amount of moves taken    
    if (starIndex.length == 3) {
        if (moves > 8 && moves <= 13) {
            stars.lastElementChild.remove();
        }

    };
    if (starIndex.length == 2) {
        if (moves > 13) {
            stars.lastElementChild.remove();
        }
    }
}

//game timer
let second = 0;
minute = 0;
hour = 0;
var timer = document.querySelector(".timer");
var interval;

function startTimer() {
    interval = setInterval(function () {
        timer.innerHTML = minute + "mins " + second + "secs";
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}

//function to shuffle cards
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
//function to build out the game board with cards
function gridBuilder() {
    let deck = document.querySelector(".deck")
    deck.innerHTML = "";
    for (i = 0; i < cardDeck.length; i++) {
        deck.appendChild(cardDeck[i]);
    }
}


//reset the card's classes and the move counter
function startGame() {
    currentCard = [];
    moves = 0;
    counter.innerHTML = moves;
    matchedCards = [];
    cardDeck = shuffle(Array.from(cardDeck));
    gridBuilder();
    for (i = 0; i < cardDeck.length; i++) {
        cardDeck[i].classList.remove('open', 'show', 'match');
    }
    alert("Match two cards of the same type to kill that monster! Good luck!")
}


//event listener for when a card is clicked on
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


//function for if win condition is met
function congratulations() {
    if (matchedCards.length === 16) {
        //trigger win condition
        alert('You vanquished the monsters! Click the blinking icon to play again!');


    }
}