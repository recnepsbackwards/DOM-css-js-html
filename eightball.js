function startBall() {
  answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: What would your mother do?", "Ask: What would an Austrailian do?", "Do the opposite.", "Your answer here."];

  var userInput = document.getElementById("question").value;
  var eightbAnswer = document.getElementById("resultP");

  if (userInput) {
    eightbAnswer.innerHTML = (answers[Math.floor(Math.random()*(answers.length))]);
  }
}
