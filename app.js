const choices = ['rock', 'paper', 'scissors'];

function game() {
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice(); 
}

function playerChoice() {
    let input = prompt('Rock, Paper or Scissors?');
    while (input == null) {
        input == prompt('Rock, Paper or Scissors?');
    }
    input = input.toLowerCase();
    
    let check = validateInput(input);
    while (check == false) {
        input = prompt('Check your spelling!');
        while (input == null) {
            input == prompt('Rock, Paper or Scissors?');
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }

}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
    
}

function validateInput(choice) {
    return choices.includes(choice)
}

game();

