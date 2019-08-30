console.log("Up and running!");
var cards = [{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},{
	rank: "queen", 
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"                                                      
},{
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
},{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}];




var createBoard = function(){
	for(var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click' , flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}

};
var restart = function(){
	// need something to refresh game-board without adding another row
	document.getElementById('game-board');//.removeChild(?);
	createBoard();
};


var cardsInPlay = [];

var loss = 0;
var wins = 0;
document.getElementById('matches');
document.getElementById('attempts');


var flipCard = function(){ 
    var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	var checkForMatch = function(){
if ( cardsInPlay[0] === cardsInPlay[1]) {
	wins++;
	matches.innerHTML = wins;
alert("You found a match!") ;} 
else {
	loss++;
	attempts.innerHTML = loss;
alert("Sorry try again");} 
};
checkForMatch();



console.log("User flipped " + cards[cardId].rank +".");
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
};




createBoard();






