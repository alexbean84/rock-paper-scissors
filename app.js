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
}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector('.playerChoice').textContent = `You choose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;

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