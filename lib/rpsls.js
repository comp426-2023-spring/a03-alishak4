import minimist from 'minimist';

export function rps(){
    const choices = ["rock","paper", "scissor"]
    const computer_shot = choices[Math.floor((Math.random()*choices.length))]
    const args = minimist(process.argv.slice(2));
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
        // console.log(playerShot)
    }


    // playerShot = 
    // console.log(JSON.stringify(playerShot))
    const choice_rules = {
        paper: ['rock'],
        rock: ['scissor'],
        scissor: ['paper'],
    }


    // const player_text = playerShot[]
    // console.log(player_text)
    if(playerShot === undefined || playerShot === null){
        return `{"player":"${computer_shot}"}`
    }
    else if(playerShot === computer_shot){
        return `{"playerShot":"${playerShot}","opponent":"${computer_shot}","result":"draw"}`
    }
    else if((choice_rules[computer_shot]).includes(playerShot)){
        return '{"playerShot":"'+playerShot+'","opponent":"${computer_shot}","result":"lose"}'
    }
    else {
        return '{"playerShot":"'+playerShot+'","opponent":"${computer_shot}","result":"win"}'
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

export function rpsls(playerShot){
    // import minimist from 'minimist';
    const args = minimist(process.argv.slice(2));

    

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
    
    if(playerShot === undefined || playerShot === null){
        return {"player":computer_shot}
    }
    else if(playerShot === computer_shot){
        return {"player":playerShot, "opponent":computer_shot, "result": "draw"}
    }
    else if(choice_rules[computer_shot].includes(playerShot)){
        return {"player":playerShot, "opponent":computer_shot, "result": "lose"}
    }
    else{
        return {"player":playerShot, "opponent":computer_shot, "result": "win"}
    }
}
