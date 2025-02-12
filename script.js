let gameResult = document.getElementById('gameResult');
let userInput = document.getElementById('userInput');
let randomnumber = Math.ceil(Math.random() * 100);


function checkGuess() {
    let guessednum = parseInt(userInput.value);

    if (guessednum > randomnumber) {
        gameResult.textContent = "Too high, Try again 🤷";
        gameResult.style.backgroundColor = "grey"
    } else if (guessednum < randomnumber) {
        gameResult.textContent = "Too low, Try Again 🤷"
        gameResult.style.backgroundColor = "red"
    } else if (guessednum === randomnumber) {
        gameResult.textContent = "You are something High 🤝"
        gameResult.style.backgroundColor = "green"
    }

}
