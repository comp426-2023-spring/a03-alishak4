import minimist from 'minimist';

export function rps(){
    const choices = ["rock","paper", "scissors"]
    const computer_shot = choices[Math.floor((Math.random()*choices.length))]
    const argv = minimist(process.argv.slice(2));
    var playerShot;
    for(var i =2; i < process.argv.length; i+=2){
        const option = process.argv[i]
        switch (option){
            case '-h':
                help_rps()
                process.exit(0);

            case '--help':
                help_rps()
                process.exit(0);
            case '-r':
                rules_rps();
                process.exit(0);
            case '--rules':
                rules_rps();
                process.exit(0);
        }
        playerShot = option;
    }
    const choice_rules = {
        paper: ['rock'],
        rock: ['scissors'],
        scissor: ['paper'],
    }

    if(playerShot === undefined || playerShot === null){
        return `{"player":"${computer_shot}"}`
    }
    else if(playerShot === computer_shot){
        return `{"player":"${playerShot}","opponent":"${computer_shot}","result":"draw"}`
    }
    else if(playerShot=='rock' & computer_shot=='paper' | playerShot=='paper' & computer_shot=='scissors' | playerShot=='scissors' & computer_shot=='rock'){
        return `{"player":"${playerShot}","opponent":"${computer_shot}","result":"lose"}`
    }
    else if(computer_shot=='rock' & playerShot=='paper' | computer_shot=='paper' & playerShot=='scissors' | computer_shot=='scissors' & playerShot=='rock'){
        return `{"player":"${playerShot}","opponent":"${computer_shot}","result":"win"}`
    }
    else{
        rules_rps()
    }
}

function help_rps(){
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

function rules_rps(){
    console.log(`
    Rules for Rock Paper Scissors:
        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors
    `)
}

export function rpsls(){
    const choices = ["lizard","rock","paper","scissor","spock"]
    const computer_shot = choices[Math.floor((Math.random()*choices.length))]
    const argv = minimist(process.argv.slice(2));
    var playerShot;
    for(var i =2; i < process.argv.length; i+=2){
        const option = process.argv[i]
        switch (option){
            case '-h':
                help_rpsls()
                process.exit(0);

            case '--help':
                help_rpsls()
                process.exit(0);
            case '-r':
                rules_rpsls();
                process.exit(0);
            case '--rules':
                rules_rpsls();
                process.exit(0);
        }
        playerShot = option;
    }
    const choice_rules = {
        lizard: ['spock', 'paper'],
        rock: ['lizard', 'scissor'],
        paper: ['rock', 'spock'],
        scissor: ['paper', 'lizard'],
        spock: ['scissor', 'rock']
        }

    if(playerShot === undefined || playerShot === null){
        return `{"player":"${computer_shot}"}`
    }
    else if(playerShot === computer_shot){
        return `{"player":"${playerShot}","opponent":"${computer_shot}","result":"draw"}`
    }
    else if(playerShot=='rock' & computer_shot=='paper' | playerShot=='paper' & computer_shot=='scissors' | playerShot=='scissors' & computer_shot=='rock'|playerShot=='lizard' & computer_shot=='rock'|playerShot=='spock' & computer_shot=='lizard'|playerShot=='scissors' & computer_shot=='spock'| playerShot=='lizard' & computer_shot=='scissors' | playerShot=='paper' & computer_shot=='lizard' | playerShot=='spock' & computer_shot=='paper' | playerShot=='rock' & computer_shot=='spock'){
        return `{"player":"${playerShot}","opponent":"${computer_shot}","result":"lose"}`
    }
    else if(computer_shot=='rock' & playerShot=='paper' | computer_shot=='paper' & playerShot=='scissors' | computer_shot=='scissors' & playerShot=='rock'|computer_shot=='lizard' & playerShot=='rock'|computer_shot=='spock' & playerShot=='lizard'|computer_shot=='scissors' & playerShot=='spock'| computer_shot=='lizard' & playerShot=='scissors' | computer_shot=='paper' & playerShot=='lizard' | computer_shot=='spock' & playerShot=='paper' | computer_shot=='rock' & playerShot=='spock'){
        return `{"player":"${playerShot}","opponent":"${computer_shot}","result":"win"}`
    }
    else{
        rules_rpsls()
    }
}

function help_rpsls(){
    console.log(`
    Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}
                `)
}

function rules_rpsls(){
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

