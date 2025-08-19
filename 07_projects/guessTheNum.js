let randomNumber = parseInt(Math.random() * 100 + 1);
let userInput = document.querySelector('.userInput');
let subButton = document.querySelector('.subButton');
let prevGuess = document.querySelector('.prevGuess');
let pendingGuess = document.querySelector('.pendingGuess')
let msgDisplayed = document.querySelector('.msgDisplayed');

let guessHistory  = [];
let guessRemaining = 10;
let ISgame = true //user can play
if (ISgame){
    subButton.addEventListener('click', function(e){
        e.preventDefault();
        let guessedValue = parseInt(userInput.value);
        isValidNumber(guessedValue);       
    })
}

function isValidNumber(guessedValue){
    if(isNaN(guessedValue)){
        alert('Please enter a valid number between 1 to 100.');
    } else if (guessedValue > 100){
        alert('Please enter a number less than 100.');
    } else if (guessedValue < 1){
        alert('Please enter a number less than 100.');
    } else {
        guessHistory.push(guessedValue);
        checkGuess(guessedValue)
        displayGuess(guessedValue);
        }
}

function checkGuess(guessedValue){
    if(guessedValue === randomNumber){
        displayMessage(`You guessed it right, you won the game`);
        endGame();
    } else if ( guessedValue > randomNumber){
        displayMessage(`opss Number is TOO High`)
    } else if ( guessedValue < randomNumber){
        displayMessage(`opss Number is TOO Low`)
    }
}
function displayGuess(guessedValue){
    userInput.value = '';
    prevGuess.innerHTML += `${guessedValue}, `;
    guessRemaining-- ;
    pendingGuess.innerHTML = `${guessRemaining}`
    if(guessRemaining === 0){
        ISgame = false;
        displayMessage(`No chances left! The number was ${randomNumber}`)
        endGame()
    }
}
function displayMessage(msg){
    msgDisplayed.innerHTML = `${msg}`
}
function endGame(){
    userInput.disabled = true;
    subButton.disabled = true;
    ISgame = false;
}