/*
//class constructor
function Dice(sides) {
  this.sides = sides;
  //anonymous function is assigned to the roll property
  this.roll = function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }	
}

var dice6 = new Dice(6);

var dice10 = new Dice(10);

//returns false because each dice object has a different function created in each roll method 
console.log(dice6.roll === dice10.roll);
*/

//Class constructor
function Dice(sides) {
  this.sides = sides; 
}

//anonymous function is assigned to the class' prototype
Dice.prototype.roll = function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }	
  
//creates a dice object with the number of sides passed by the user  
var sides = prompt("How many sides would you like your dice to have");
var dice = new Dice(parseInt(sides));


