
function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
  //uses the object created in the dice.js file
  var result = dice6.roll();
  printNumber(result);
};
