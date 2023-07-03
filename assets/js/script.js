// getComputerChoice randomly selects between `viking` luka` `dino` and returns that string

function getComputerChoice () {
    const vldChoice = ['Viking', 'Luka', 'Dino']
    const randomChoice = Math.floor(Math.random() * 3)
    return vldChoice[randomChoice]
}