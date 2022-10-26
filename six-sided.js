const prompt = require('prompt-sync')({sigint: true})

let roll = prompt('Enter "roll" to roll the dice: ')
console.log(Math.ceil(Math.random()*6))