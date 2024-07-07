const score = {
    Wins: 0,
    Losses: 0,
    Tie: 0
}

function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';
    if(playerMove === 'Rock'){
        if(computerMove === 'Rock'){
            result = 'Tie.';
        } else if (computerMove === 'Paper'){
            result = 'You Lose.'
        } else if (computerMove === 'Scissor'){
            result = 'You Win.'
        } 
    } else if (playerMove === 'Paper'){
        if(computerMove === 'Rock'){
            result = 'You Win.';
        } else if (computerMove === 'Paper'){
            result = 'Tie.'
        } else if (computerMove === 'Scissor'){
            result = 'You Lose.'
        } 
    } else if (playerMove === 'Scissor'){
        if(computerMove === 'Rock'){
            result = 'You Lose.';
        } else if (computerMove === 'Paper'){
            result = 'You Win.'
        } else if (computerMove === 'Scissor'){
            result = 'Tie.'
        } 
    }

    if(result === 'You Win.'){
        score.Wins += 1;
    } else if (result === 'You Lose.'){
        score.Losses += 1;
    } else if (result === 'Tie.'){
        score.Tie += 1;
    }


    document.getElementById('game-result').innerText = result;
    document.getElementById('moves-display').textContent = `Player Move: ${playerMove} - Computer Move: ${computerMove}`;
    document.getElementById('score-display').textContent = `Wins: ${score.Wins} - Losses: ${score.Losses} - Ties: ${score.Tie}`;
}



function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber < 0.33){
        computerMove = 'Rock';
    } else if (randomNumber >= 0.33 && randomNumber < 0.66){
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissor';
    }   
    return computerMove;
  }
