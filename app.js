const choices = ['rock', 'paper', 'scissors'];
let winners = [];

function resetGame() {
    winners = [];
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".playerChoice").textContent = "";
    document.querySelector(".computerChoice").textContent = "";
    document.querySelector(".reset").style.display = "none";

}

function startGame() {
   let imgs = document.querySelectorAll("img");
   imgs.forEach((img) => 
    img.addEventListener(('click'), () =>{
        if (img.id) {
            playRound(img.id);
        }
    }))
}

function playRound(playerChoice) {
    let wins = checkWins();
    if (wins >= 5) {
        return
    }
    const computerChoice = computerSelect();

    const winner = checkWinner(playerChoice, computerChoice);

    winners.push(winner);
    displayWins();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins();
    if (wins == 5) {
        displayEnd()
    }
}

function displayEnd() {
    let playerWins = winners.filter((item) => item == 'Player').length;

    if(playerWins == 5){
        document.querySelector('.winner').textContent = 'You Won 5 Games!';
    } else {
        document.querySelector('.winner').textContent = 'The Computer Won 5 Times';
    }
    document.querySelector('.reset').style.display = 'flex';
}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector('.playerChoice').textContent = `You Chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    document.querySelector('.computerChoice').textContent = `Computer Chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
    if (winner == 'Player') {
        document.querySelector('.winner').textContent = "You Won!";
    }   else if (winner = 'Computer') {
        document.querySelector('.winner').textContent = "The Computer Has Won!";
    }   else {
        document.querySelector('.winner').textContent = "It's a tie";
    }
}

function displayWins() {
    let pWinCount = winners.filter((item) => item == 'Player').length;
    let cWinCount = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`;
    document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`;
    document.querySelector('.ties').textContent = `Ties: ${ties}`;
}

function computerSelect() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    document.querySelector(`.${choice}`).classList.add('active')
    setTimeout(() => {
        document.querySelector(`.${choice}`).classList.remove('active')
    }, 700);
    return choice;
}

function checkWins(){
    let pWinCount = winners.filter((item) => item == 'Player').length;
    let cWinCount = winners.filter((item) => item == 'Computer').length;
    return Math.max(pWinCount, cWinCount);

}

function checkWinner(choiceP, choiceC) {
    if(choiceP === choiceC) {
        return 'Tie';
    }   else if (
        (choiceP === 'rock' && choiceC === 'scissors') || 
        (choiceP === 'paper' && choiceC === 'rock') || 
        (choiceP === 'scissors' && choiceC === 'paper') 
    )   {
        return 'Player';
    }   else {
        return 'Computer';
    }
}

startGame();