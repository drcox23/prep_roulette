/*From wikipedia https://en.wikipedia.org/wiki/Roulette
Roulette is a casino game named after the French word meaning little wheel. In the game, players may choose to place bets on either a single number, various groupings of numbers, the colors red or black, whether the number is odd or even, or if the numbers are high (19–36) or low (1–18).*/

//Objective
/*Create a web app that will generate a random number between 0 - 36.
For even numbers not including zero, give it a background color of black and a font color of white.
For odd numbers, give it a background color of red and a font color of white.
For the number 0, give it a background color of green and a font color of white.

A random number will be generated every 5 seconds.*/

// Bonus
// 1) Add some additional styling to your application.
// 2) Create on and off buttons that will start and stop your application.

function BackgroundEven(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white'
}

function BackgroundOdd(){
   document.body.style.backgroundColor = 'red';
   document.body.style.color = 'white'
}

function BackgroundZero(){
   document.body.style.backgroundColor = 'Green';
   document.body.style.color = 'white'
}

var daNumber = [];

setInterval(function(){   
    daNumber = (Math.floor((Math.random()*37)+1)); 
    var newDiv = document.createElement('div');
    newDiv.id = 'daColor';
    newDiv.innerHTML = daNumber;
    numDisp.appendChild(newDiv);
    if(daNumber === 0){
    BackgroundZero();
} else if (daNumber % 2 === 0) {
    BackgroundEven();
} else {
    BackgroundOdd();
}
 }, 1000);

  
     


 


