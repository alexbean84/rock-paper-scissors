const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function resetGame() {

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
    document.querySelector('.winner').textContent = `Round winner: ${winner}`;

}

function displayWins() {
    let pWinCount = winners.filter((item) => item == 'Player').length;
    let cWinCount = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`;
    document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`;
    document.querySelector('.ties').textContent = `Score: ${ties}`;
}

function computerSelect() {
    return choices[Math.floor(Math.random() * choices.length)];
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

function setWins() {
    let pWinCount = winners.filter((item) => item == 'Player').length;
    let cWinCount = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
}

startGame();