const prompt = require('prompt-sync')({sigint: true})

let dice = Number(prompt("Enter the sided dice you'd like to roll 6, 10 or 50: "))


if(dice === 6){
    console.log(Math.ceil(Math.random()*6))
} else if( dice === 10){
    console.log(Math.ceil(Math.random()*10))
} else if(dice === 50){
    console.log(Math.ceil(Math.random()*50))
} else {
    console.log("Sorry, that dice is out of stock. Please pick from inventory. ")
}
