export function rpsls(playerShot){
    const choices = [
        "lizard",
        "rock",
        "paper",
        "scissor",
        "spock"
    ]

    const choice_rile = {
        lizard: ['spock', 'paper'],
        rock: ['lizard', 'scissor'],
        paper: ['rock', 'spock'],
        scissor: ['paper', 'lizard'],
        spock: ['scissor', 'rock']
        }
}