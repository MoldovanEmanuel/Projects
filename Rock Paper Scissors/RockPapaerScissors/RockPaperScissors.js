const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button'); 

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerText = userChoice
    generateComputerChoice()
    runGame()
})); 

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5) + 1; 

    if (randomNumber === 1) {
        computerChoice = 'rock'
    };

    if (randomNumber === 2) {
        computerChoice = 'paper'
    };
    
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    };

    if (randomNumber === 4) {
        computerChoice = 'lizard'
    };

    if (randomNumber === 5) {
        computerChoice = 'spock'
    };

    computerChoiceDisplay.innerText = computerChoice;
};

function runGame() {
   
    if ( userChoice === 'rock') {
        if (computerChoice === 'scissors' || computerChoice === 'lizard') {
            result = 'You Won!'
        } else if (userChoice === computerChoice) {
            result = 'Draw!'
        } else {
            result = 'You Lost!'
        }
    };

    if ( userChoice === 'paper') {
        if (computerChoice === 'rock' || computerChoice === 'spock') {
            result = 'You Won!'
        } else if (userChoice === computerChoice) {
            result = 'Draw!'
        } else {
            result = 'You Lost!'
        }
    };

    if ( userChoice === 'scissors') {
        if (computerChoice === 'paper' || computerChoice === 'lizard') {
            result = 'You Won!'
        } else if (userChoice === computerChoice) {
            result = 'Draw!' 
        } else {
            result = 'You Lost!'
        }
    };

    if ( userChoice === 'lizard') {
        if (computerChoice === 'spock' || computerChoice === 'paper') {
            result = 'You Won!'
        } else if (userChoice === computerChoice) {
            result = 'Draw!' 
        } else {
            result = 'You Lost!'
        }
    };

    if ( userChoice === 'spock') {
        if (computerChoice === 'scissors' || computerChoice === 'rock') {
            result = 'You Won!'
        } else if (userChoice === computerChoice) {
            result = 'Draw!' 
        } else {
            result = 'You Lost!'
        }
    };

        resultDisplay.innerText = result;

};


    /*if (computerChoice === 'rock' && userChoice === 'paper') {
       result = 'You Won!'
    };

    if (computerChoice === 'rock' && userChoice === 'scissors') {
       result = 'You Lost!'
    };

    if (computerChoice === 'rock' && userChoice === 'lizard') {
        result = 'You Lost!'
    };

    if (computerChoice === 'paper' && userChoice === 'scissors') {
       result = 'You Won!'
    };

    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lost!'
    };

    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You Won!'
    };

    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You Lost!'
    };

    if (computerChoice === 'scissors' && userChoice === 'lizard') {
        result = 'You Lost!'
    };

    if (computerChoice === 'lizard' && userChoice === 'spock') {
        result = 'You Lost!'
    };

    if (computerChoice === 'lizard' && userChoice === 'paper') {
        result = 'You Lost!'
    }

    if (computerChoice === 'spock' && userChoice === 'scissors') {
        result = 'You Lost!'
    }; 

    if (computerChoice === 'spock' && userChoice === 'spock') {
        result = 'You Won!'
    };

    if (computerChoice === 'spock' && userChoice === 'rock') {
        result = 'You Lost!'
    } */


