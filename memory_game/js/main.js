console.log("Up and running!");
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cardOne, cardTwo);
if ( cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);
alert("You found a match!");} 
else if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
	console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);
alert("Sorry try again");} 
else {console.log("Why?");}


