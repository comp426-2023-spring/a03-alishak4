import minimist from 'minimist';


export function rps(playerShot){
    const args = minimist(process.argv.slice(2));

    if(args.h){
        console.log(`
        Usage: node-rps [SHOT] 
        Play Rock Paper Scissors (RPS)
    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit

    Examples:
    node-rps        Return JSON with single player RPS result.
                    e.g. {"player":"rock"}
    node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"scissors","result":"win"}
                    `)
    }
    if(args.r){
        console.log(`
        Rules for Rock Paper Scissors:
            - Scissors CUTS Paper
            - Paper COVERS Rock
            - Rock CRUSHES Scissors
        `)
    }
    const choices = ["rock","paper", "scissor"]


    const choice_rules = {
        paper: ['rock'],
        rock: ['scissor'],
        scissor: ['paper'],
    }

    const computer_shot = choices[Math.floor((Math.random()*choices.length))]
    
    if(playerShot === undefined || playerShot === null){
        return {player: computer_shot}
    }
    else if(playerShot === computer_shot){
        return {playerShot: playerShot, opponent: computer_shot, result: 'draw'}
    }
    else if((choice_rules[computer_shot]).includes(playerShot)){
        return {player: playerShot, opponent: computer_shot, result: 'lose'}
    }
    else{
        return {player: playerShot, opponent: computer_shot, result: 'win'}
    }
}


export function rpsls(playerShot){
    // import minimist from 'minimist';
    const args = minimist(process.argv.slice(2));

    if(args.h){
        console.log(`
        Usage: node-rps [SHOT] 
        Play Rock Paper Scissors (RPS)
    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit

    Examples:
    node-rps        Return JSON with single player RPS result.
                    e.g. {"player":"rock"}
    node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"scissors","result":"win"}
                    `)
    }

    if(args.r){
        console.log(`
        Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

            - Scissors CUTS Paper
            - Paper COVERS Rock
            - Rock SMOOSHES Lizard
            - Lizard POISONS Spock
            - Spock SMASHES Scissors
            - Scissors DECAPITATES Lizard
            - Lizard EATS Paper
            - Paper DISPROVES Spock
            - Spock VAPORIZES Rock
            - Rock CRUSHES Scissors
        `
        )
    }

    const choices = [
        "lizard",
        "rock",
        "paper",
        "scissor",
        "spock"
    ]

    // const choice_rules = {
    //     lizard: ['spock', 'paper'],
    //     rock: ['lizard', 'scissor'],
    //     paper: ['rock', 'spock'],
    //     scissor: ['paper', 'lizard'],
    //     spock: ['scissor', 'rock']
    //     }

    // const computer_shot = choices[Math.floor((Math.random()*choices.length))]

    // if (playerShot === undefined || playerShot === null){
    //     return {player: computer_shot}
    // }
    // else if(playerShot === computer_shot){
    //     return {player: playerShot, opponent: computer_shot, result: 'draw'}
    // }
    // else if((choice_rules[computer_shot]).includes(playerShot)){
    //     return {player: playerShot, opponent: computer_shot, result: 'lose'}
    // }
    // else{
    //     return {player: playerShot, opponent: computer_shot, result: 'win'}
    // }
}
