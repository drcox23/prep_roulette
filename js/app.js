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

var daNumber = [];

// for (var i=0; i<daNumber.length; i++){
// var newRow = document.createElement('div');
// new.innerHTML = daNumber[i];
// numDisplay.appendchild(newRow);

setInterval(function(){   
    daNumber = (Math.floor((Math.random()*37)+1)); 
    var newDiv = document.createElement('div');
    newDiv.innerHTML = daNumber;
    numDisp.appendChild(newDiv);
 }, 1000);

 
// var daNumber = [];
// var daSpin = 1000;

// function spin() {
//     console.log('test');
// for (let i = 0; i < daSpin.length; i++) {
//     daNumber = Math.floor(Math.random()*37);
//     document.getElementById('numDisp').innerHTML = daNumber;
// }

// console.log(spin);
//     // console.log(daNumber);
// for (var i = 0; i<daNumber.length; i++){

// function randomNum() {
//     console.log('test');
//     document.getElementById('display').innerHTML = randomNum;

// }



// randomNum();

