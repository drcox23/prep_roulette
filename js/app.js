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


var spin = document.getElementById("spinner");
spin.addEventListener('click', getNumber);

var spinStop = document.getElementById("stopSpin");
spinStop.addEventListener('click', stopMe);

var theInterval;

function getNumber(){
    theInterval = setInterval(daInterval, 1000);
}

function daInterval(){   
    var daNumber = (Math.floor((Math.random()*37)+1));
    console.log(daNumber);
    if (daNumber === 0){
        var numZero = document.createElement('div');
        numZero.id = "zeroColor";
        numZero.innerHTML = daNumber;
        numZero.style.backgroundColor = 'Green';
        numZero.style.color = 'white'
        numDisp.appendChild(numZero);
    
    }else if (daNumber % 2 === 0){
        var numEven = document.createElement('div');
        numEven.id = "evenColor";
        numEven.innerHTML = daNumber;
        numEven.style.backgroundColor = 'black';
        numEven.style.color = 'white';
        numDisp.appendChild(numEven);
    }else{
        var numOdd = document.createElement('div');
        numOdd.id = "oddColor";
        numOdd.innerHTML = daNumber;
        numOdd.style.backgroundColor = 'red';
        numOdd.style.color = 'white'
        numDisp.appendChild(numOdd);
    }
}

function stopMe(){
    clearInterval(theInterval);

} ; 

