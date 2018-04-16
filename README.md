# Dungeon Matcher
Card matching memory game created for Udacity nanodegree program. 

[![forthebadge](https://forthebadge.com/images/badges/gluten-free.svg)](https://forthebadge.com)

# How to Load the Game
* Clone the repo and open index.html, or
* [Play here](https://mackhatcher.github.io/memorygame1/)

# How to Play the Game
The game is a simple memory testing game, using cards. The game consists of a 8 x 2 grid of cards which default to the face-down positon.
The face of each card features a fantasy based creature from the popular role-playing game "Dungeons & Dragons".

The game officially begins when the first match attempt of two cards occurs; this starts the timer. 
On each turn, the player flips over one card to reveal the monster hiding underneath. 
The player then turns over a second card, hoping it's revealed monster matches the first flipped card's monster.
If the monsters match, both cards will stay flipped right-side up, and are removed from play. 
If the two flipped cards are not a match, they will both turn back over and the sequence begins again.

The game is won when the player has successfully matched all 8 pairs of cards. 

<a href="https://ibb.co/kmCpRn"><img src="https://preview.ibb.co/cBx0XS/Match_Screen.jpg" alt="Match_Screen" border="0"></a>
<a href="https://ibb.co/jbXjsS"><img src="https://preview.ibb.co/dpJPsS/MatchWin.jpg" alt="MatchWin" border="0"></a>

# Cool Features
* There is a counter than increases by 1 for every 2 cards that are flipped over.
* The player's performance is rated using a "3 star" rating system, dependant on the amount of moves the player engages in.
* The timer only starts once 2 cards have been attempted to match.
* When the player has successfully defeated all the monsters, a pop-up will appear letting the player know they were succesful, and informing them they can play again, if they wish.
* The player can reset the cards, move counter, timer and star rating by clicking the reset button.

# External Resources

## Array Shuffle:
* http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

## Timer:
* https://www.w3schools.com/howto/howto_js_countdown.asp

# Issues/Updates:
* At present, no issues with the game are known. If you find anything while playing, please email me at mack.hatcher1@outlook.com!
* New features will be added later, including a more dynamic win modal that will feature total time taken, number of moves, and their star rating.
## Author:
* This game was constructed by Mack Hatcher, using starter HTML and CSS provided by Udacity. 
