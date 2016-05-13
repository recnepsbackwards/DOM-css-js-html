// var userName = prompt("Welcome! Enter your name:");
// var secretNumber = (Math.floor(Math.random() * 100) + 1)
// console.log(secretNumber);
// //Hi Lo Game
// function processAttempt() {
//   var userGuess = document.getElementById("guess").value;
//   var count = 1;
//   var attempt = document.getElementById("otherText");
//   var trackCounter = attempt.innerHTML = "You have used " + count + " guesses. You only get 7!";
//   var trackGuess = document.getElementById("outputText");
//   while (secretNumber != userGuess && count < 7){
//     if (isNaN(userGuess)) {
//       userGuess.value = userGuess.value + "is not an acceptable answer!";
//       trackCounter;
//     }
//     else if (userGuess > secretNumber) {
//       userGuess.value = userGuess.value + " is too high. Guess again.";
//       trackCounter;
//     }
//     else{
//       userGuess.value = userGuess.value + "is too low. Guess again.";
//       trackCounter;
//     }
//     count = count + 1;
//   }
//   if (userGuess === secretNumber){
//     trackGuess.innerHtml = userGuess + " is correct! You win! Great job, " + userName + "!";
//   }
//   else {
//       trackGuess.innerHtml = "You lose! You suck, " + userName + "!";
//   }
// }

var userName = prompt("Welcome! Enter your name:");
var secretNumber = (Math.floor(Math.random() * 100) + 1);
var count = 0;
console.log(secretNumber);
function processAttempt() {
  var userGuess = parseInt(document.getElementById("guess").value);
  var guessText = document.getElementById("outputText");
  var guessCounter = document.getElementById("counter");
  count++;// count = count + 1;
  alert(count);
  if (userGuess > secretNumber) {
    guessText.innerHTML = userGuess + " is too high!";
    guessCounter.innerHTML = count;
  }
  if (userGuess < secretNumber){
    guessText.innerHTML = userGuess + " is too low!";
    guessCounter.innerHTML = count;
  }
  if (userGuess === secretNumber) {
    guessText.innerHTML = userGuess + " is correct, you win!";
  }
}
