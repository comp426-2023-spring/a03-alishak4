#!/usr/bin/env node
import { rps } from "../lib/rpsls.js"
// import minimist from 'minimist'
// const args = minimist(process.argv.slice(2));
// // console.log(args);

// if(args.h){
//     console.log(`
//     Usage: node-rps [SHOT] 
//     Play Rock Paper Scissors (RPS)
// -h, --help      display this help message and exit
// -r, --rules     display the rules and exit

// Examples:
// node-rps        Return JSON with single player RPS result.
//                 e.g. {"player":"rock"}
// node-rps rock   Return JSON with results for RPS played against a simulated opponent.
//                 e.g {"player":"rock","opponent":"scissors","result":"win"}
//                 `)
// }
// else if(args.r){
//     console.log(`
//     Rules for Rock Paper Scissors:
//         - Scissors CUTS Paper
//         - Paper COVERS Rock
//         - Rock CRUSHES Scissors
//     `)
// }
// else if(process.argv.length <= 2){
//     console.log(rps())
// }
// else{
//         // console.log("else statement")
//         console.log(rps(args))
//     }
    
    
    console.log(rps())


