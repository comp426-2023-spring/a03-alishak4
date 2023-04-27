export function rpsls(playerShot){
    const choices = [
        "lizard",
        "rock",
        "paper",
        "scissor",
        "spock"
    ]

    const choice_rules = {
        lizard: ['spock', 'paper'],
        rock: ['lizard', 'scissor'],
        paper: ['rock', 'spock'],
        scissor: ['paper', 'lizard'],
        spock: ['scissor', 'rock']
        }

    const computer_shot = choices[Math.floor((Math.random()*choices.length))]

    if (playerShot === undefined || playerShot === null){
        return {player: computer_shot}
    }
}