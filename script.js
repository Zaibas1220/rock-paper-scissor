function computerPlay (){
    let computerValue = Math.floor(Math.random() * 3);
    return computerValue;
}

function playerPlay (){
    let playerValue = prompt ("Write one: Rock - Paper - Scissor");
    playerValue = playerValue.toLowerCase();
    switch(playerValue){
        case ("rock"):
            return 0;
        case ("paper"):
            return 1;
        case ("scissor"):
            return 2;
        default:
            alert("Inserted value was not one of: Rock - Paper - Scissor.");
            playerPlay();
    }
}

function playRound (){
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();

    if(playerSelection === 0 && computerSelection === 0){
        console.log("Draw");
        return 0;
    } else if (playerSelection === 1 && computerSelection === 1) {
        console.log("Draw");
        return 0;
    } else if (playerSelection === 2 && computerSelection === 2) {
        console.log("Draw");
        return 0;
    } else if (playerSelection === 0 && computerSelection === 1) {
        console.log("Computer win!");
        return 2;
    } else if (playerSelection === 0 && computerSelection === 2) {
        console.log("Player win!");
        return 1;
    } else if (playerSelection === 1 && computerSelection === 0) {
        console.log("Player win!");
        return 1;
    } else if (playerSelection === 1 && computerSelection === 2) {
        console.log("Computer win!");
        return 2;
    } else if (playerSelection === 2 && computerSelection === 0) {
        console.log("Computer win!");
        return 2;
    } else if (playerSelection === 2 && computerSelection === 1) {
        console.log("Player win!")
        return 1;
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(let round = 1; round <= 5; round++){
        let result = playRound();
        if(result === 1){
            playerWins++;
        } else if (result === 2){
            computerWins++;
        }

        console.log( "Player: " + playerWins + " - " + "Computer: " + computerWins);
    }

    if(playerWins > computerWins){
        alert("Player wins " + playerWins + " - " + computerWins);
    } else if (playerWins < computerWins){
        alert("Computer wins " + playerWins + " - " + computerWins);
    } else {
        alert("Draw " + playerWins + " - " + computerWins)
    }
}

game();