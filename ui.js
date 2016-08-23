
function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}


var button = document.getElementById("button");

button.onclick = function() {
  //calls roll method on the dice object created in the dice.js file
  var result = dice.roll();
  printNumber(result);
};
