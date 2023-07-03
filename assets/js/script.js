// getComputerChoice randomly selects between `viking` luka` `dino` and returns that string

function getComputerChoice () {
    const vldChoice = ['Viking', 'Luka', 'Dino']
    const randomChoice = Math.floor(Math.random() * 3)
    return vldChoice[randomChoice]
}

// getResult compares playerChoice & computerChoice & return the score accordingly

function getResult(playerChoice, computerChoice) {
    let score;
    if (playerChoice == computerChoice) {
        score = 0
    }   else if (playerChoice == 'Viking' && computerChoice == 'Dino') {
        score = 1
    }   else if (playerChoice == 'Luka' && computerChoice == 'Viking') {
        score = 1
    }   else if (playerChoice == 'Dino' && computerChoice == 'Luka') {
        score = 1
    }   else {
        score = -1
    }
    return score
}