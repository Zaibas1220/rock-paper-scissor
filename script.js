const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const result = document.querySelector('#results');
const winner = document.querySelector('#winner');

let player = 0;
let computer = 0;

rock.addEventListener('click', () => {
    playRound(rock.id);
})

paper.addEventListener('click', () => {
    playRound(paper.id);
})

scissor.addEventListener('click', () => {
    playRound(scissor.id);
})



function computerPlay() {
    let computerValue = Math.floor(Math.random() * 3);
    return computerValue;
}

function playerPlay(selection) {
    switch (selection) {
        case ("rock"):
            console.log("Player selected rock");
            return 0;
        case ("paper"):
            console.log("Player selected paper");
            return 1;
        case ("scissor"):
            console.log("Player selected scissor");
            return 2;
    }
}

function playRound(selection) {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay(selection);

    if (playerSelection === 0 && computerSelection === 0) {
        console.log("Draw");
    } else if (playerSelection === 1 && computerSelection === 1) {
        console.log("Draw");
    } else if (playerSelection === 2 && computerSelection === 2) {
        console.log("Draw");
    } else if (playerSelection === 0 && computerSelection === 1) {
        console.log("Computer win!");
        computer++;
    } else if (playerSelection === 0 && computerSelection === 2) {
        console.log("Player win!");
        player++;
    } else if (playerSelection === 1 && computerSelection === 0) {
        console.log("Player win!");
        player++;
    } else if (playerSelection === 1 && computerSelection === 2) {
        console.log("Computer win!");
        computer++;
    } else if (playerSelection === 2 && computerSelection === 0) {
        console.log("Computer win!");
        computer++;
    } else if (playerSelection === 2 && computerSelection === 1) {
        console.log("Player win!")
        player++;
    }

    result.textContent = player + " - " + computer;

    if(player === 5 || computer === 5){
        if(player === 5){
            winner.textContent = "Player win the game!";
        } else if(computer === 5){
            winner.textContent = "Computer win the game!";
        }

        rock.remove();
        paper.remove();
        scissor.remove();
    }
}

