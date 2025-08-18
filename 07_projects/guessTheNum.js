let randomNumber = parseInt(Math.random() * 100 + 1);
let userInput = document.querySelector('.userInput');
let subButton = document.querySelector('.subButton');
let prevGuess = document.querySelector('.prevGuess');
let pendingGuess = document.querySelector('.pendingGuess')

let guessHistory  = [];
let guessRemaining = 0;
let ISgame = true //user game khel skta hai
if (ISgame){
    subButton.addEventListener('click', function(e){
        e.preventDefault();
        let guessedValue = parseInt(userInput.value);
        isValidNumber(guessedValue);       
    })
}

function isValidNumber(guessedValue){
    if(isNaN(guessedValue)){
        alert('Please enter a valid number.');
    } else if (guessedValue > 100){
        alert('Please enter a number less than 100.');
    } else if (guessedValue < 1){
        alert('Please enter a number less than 100.');
    } else {
        guessHistory.push(guessedValue);
        if(guessRemaining === 11){
            displayMessage(`Game is Over. Random number was ${randomNumber}`);
            endGame();
        } else{
            displayGuess(guessedValue);
            checkGuess(guessedValue)
        }
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
    guessRemaining++ ;
    pendingGuess.innerHTML = `${10 - guessRemaining}`
}
function displayMessage(){
    //
}
function endGame(){
    //
}