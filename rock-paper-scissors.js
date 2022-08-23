function getComputerChoice() {
    const selections = ["rock", "paper", "scissors"]
    const index = Math.floor(Math.random() * selections.length)
    const sel = selections[index]

    return sel
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection == computerSelection) {
        return 0
    }

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        return 1
    }

    return -1
}


function game() {
    let playerScore = 0
    const rounds = 5
    for (let i = 0; i < rounds; ++i) {
        let playerSelection = prompt("What's your play?")
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection)
        playerScore += result

        if (result == 1) {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        } else if (result == -1) {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        } else {
            console.log("It's a tie!")
        }
    }

    if (playerScore == (rounds - playerScore)) {
        console.log("The game resulted in a tie!")
    }
    else if (playerScore > (rounds - playerScore)) {
        console.log("The player wins!")
    } else {
        console.log("The computer wins!")
    }
}