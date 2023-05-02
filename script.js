//stores random number
let secretNumber = Math.floor(Math.random() * 10 + 1);
console.log(secretNumber);

let userInput = document.getElementById("input");
let message = document.getElementById("message");

//function runs when the user clicks on the guess button
function checkGuess() {
  let guess = userInput.value;

  if (guess == secretNumber) {
    message.innerHTML = "Your guess is correct";
    message.style.color = "green";
  } else if (guess > secretNumber) {
    message.innerHTML = "Your guess is high";
    message.style.color = "red";
  } else if (guess < secretNumber) {
    message.innerHTML = "Your guess is low";
    message.style.color = "red";
  }
}

//function runs as user clicks reset
function resetGame() {
  let secretNumber = Math.floor(Math.random() * 10 + 1);
  console.log(secretNumber);
  userInput.value = "";
  message.innerHTML = "";
}
