const totalScore = {playerScore: 0, computerScore: 0}

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

// showResult updates the DOM to 'You Win' or 'You Lose' or 'Its a draw' based on the score. 
// Also shows Player choice vs Computer choice

function showResult(score, playerChoice, computerChoice) {

    const resultSpan = document.getElementById('result')
    const playerScoreSpan = document.getElementById('player-score')
    const computerScoreSpan = document.getElementById('computer-score')
    const gameChoiceSpan = document.getElementById('game-choice')
    

    if (score == -1) {
        resultSpan.innerText = 'You Lose!'
    } else if (score == 0) {
        resultSpan.innerText = "Draw"
    } else {
        resultSpan.innerText = 'You Won!'
    }

    gameChoiceSpan.innerText = `${playerChoice} vs ${computerChoice}`
    playerScoreSpan.innerText = totalScore['playerScore']
    computerScoreSpan.innerText = totalScore['computerScore']
}
// Calculates who won and shows it on the screen

function onClickVLDS(playerChoice) {
    console.log({playerChoice})
    const computerChoice = getComputerChoice()
    console.log({computerChoice})
    const score = getResult(playerChoice, computerChoice)
    totalScore['playerScore'] += score
    totalScore['computerScore'] -= score
    console.log({score})
    console.log(totalScore)
    showResult(score, playerChoice, computerChoice)
}

// Make the VLD buttons actively listen for a click and do something once a click is detected

function playGame() {
    const vldButtons = document.querySelectorAll('.vldButton')
    
    vldButtons.forEach(vldButton => {
        vldButton.onclick = () => onClickVLDS(vldButton.value)
    })

    const resetGameButton = document.getElementById('btn-reset')
    resetGameButton.onclick = () => resetGame(totalScore)
}

// resetGame function clears all the text on the DOM

function resetGame(totalScore) {
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0

    const resultSpan = document.getElementById('result')
    const playerScoreSpan = document.getElementById('player-score')
    const computerScoreSpan = document.getElementById('computer-score')
    const gameChoiceSpan = document.getElementById('game-choice')

    resultSpan.innerText = ''
    playerScoreSpan.innerText = ''
    computerScoreSpan.innerText = ''
    gameChoiceSpan.innerText = ''

}

playGame()