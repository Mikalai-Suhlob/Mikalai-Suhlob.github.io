
var difficult = findGetParameter('diff') || 1;						
var cover = findGetParameter('cover') || 1;						
var imgDir = 'img';													
var backIMG = ['dog.png', 'yoba.png', 'smile.png'];				
var frontIMG = ['1.png', '2.png', '3.png', '4.png', '5.png'];	
var stepCount = 0;												

var cardClass = 'card';										
var flippedCardClass = 'flippedCard';							
var goodFlippedCardClass = 'goodflippedcard';						
var cardFrontClass = 'cardfront';								
var cardBackClass = 'cardback';									
var boardID = 'cardboard';										
var timerID = 'timer';											
var restartbtnID = 'restartButton';								

var timerStarted = false;									
var flippedSomeCards = false;									

document.addEventListener('DOMContentLoaded', function() {
	initGame();

	
    document.getElementById(restartbtnID).addEventListener("click", function() { initGame(); });
});

function initGame() {
	document.getElementById(timerID).innerHTML = 0;
	stepCount = 0;
	timerStarted = false;

	if(difficult < 1 || difficult > 3 || difficult === 'undefined') {
		alert('Wrong difficult selected!');
		return;
	}

	if(cover < 1 || cover > 3 || cover === 'undefined') {
		alert('Wrong cover selected!');
		return;
	}

	document.getElementById(boardID).innerHTML = '';

	var tmp = [];

	for(var i=0;i<2*difficult;i++) {
		for(var j=0;j<frontIMG.length;j++) { 
			tmp[frontIMG.length * i + j] = new Card(frontIMG[j], backIMG[cover-1]);
		}	
	}
	tmp = shuffle(tmp);
	for(var i=0;i<tmp.length;i++) { 
		document.getElementById(boardID).append(tmp[i].create());
	}	
}

function Card(fimg, bimg) {
	this.fimg = fimg;			
	this.bimg = bimg;			
	this.create = function(){

		var card = document.createElement('div');
		var front = document.createElement('div');
		var back = document.createElement('div');
		var frontPic = document.createElement('img');
		var backPic = document.createElement('img');
		
		card.className = cardClass;
		front.className = cardFrontClass;
		back.className = cardBackClass;

		frontPic.src = imgDir + '/' + this.fimg;
		frontPic.alt = this.fimg;
		backPic.src = imgDir + '/' + this.bimg;
		backPic.alt = this.bimg;

	
		card.addEventListener("click", function() {

			if(!timerStarted) startTimer();

			if(flippedSomeCards) return;
	
			if(this.className === flippedCardClass || this.className === goodFlippedCardClass) return;

			this.className = flippedCardClass;

		
			if(document.getElementsByClassName(flippedCardClass).length >= 2) {
				checkCards();
			}
		});

	
		front.append(frontPic);
		back.append(backPic);
		card.append(front);
		card.append(back);

	
		return card;
	}
}

function checkCards() {
	flippedSomeCards = true;


	var allCards = document.getElementsByClassName(flippedCardClass);

	var good = (allCards[0].getElementsByClassName(cardFrontClass)[0].innerHTML === allCards[1].getElementsByClassName(cardFrontClass)[0].innerHTML);
				
	var flipTimeout = setTimeout(function() {
		stepCount++;
		
		while(allCards.length)
			allCards[0].className = (good)?goodFlippedCardClass:cardClass;
		flippedSomeCards = false;

		if(document.getElementsByClassName(goodFlippedCardClass).length === document.getElementById(boardID).children.length) {
			timerStarted = false;
			
			
			 document.getElementById('cardboard').innerHTML = "<p class='res'>You win!<br> Step: " + stepCount + "<br> Time: " + document.getElementById(timerID).innerHTML+" s. </p>";
		}
	}, 1000);
}


function startTimer() {
	timerStarted = true;
	updateTimer();
}

function updateTimer() {
	if(!timerStarted) return;

	var timerTimeout = setTimeout(function() {
		if(timerStarted) document.getElementById(timerID).innerHTML++;
		updateTimer();
	}, 1000);
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  
  while (0 !== currentIndex) {

   
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
	function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

var inputs = document.getElementsByTagName("input"); 

	for (i=0; i<inputs.length; i++){
	
	if (inputs[i].hasAttribute('cover')){
	
		if(inputs[i].getAttribute('value') === findGetParameter('cover')){
		 inputs[i].setAttribute('checked', 1);
		}
	}
	

if (inputs[i].hasAttribute('diff')){
	
		if(inputs[i].getAttribute('value') === findGetParameter('diff')){
		 inputs[i].setAttribute('checked', 1);
		}
	}
	}


var inputs = document.getElementsByTagName("input"); 
	for (i=0; i<inputs.length; i++){
		inputs[i].addEventListener("click", function(e) {
			if (this.hasAttribute('cover')) {     
				document.getElementById("cover").submit();
			}else{
				document.getElementById("cover").submit();
			}
		});
	};

   