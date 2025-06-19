let humanScore = 0
let computerScore = 0


function getHumanChoice(){

    let humanChoice = prompt("What's your choice? Rock, Paper or Scissor?");

    if (humanChoice.toLowerCase() === "rock") {

        console.log("Rock")

    } else if (humanChoice.toLowerCase() === "paper" ) {

        console.log("Paper")

    } else if (humanChoice.toLowerCase() === "scissors") {
        
        console.log("Scissors")
       
    }

}

getHumanChoice();


function getComputerChoice(){

    let choice = Math.floor(Math.random() * 3);

    if (choice === 0){

        console.log("Rock");

    } else if (choice === 1){

        console.log("Paper");

    } else {

        console.log("Scissors");

    }
}

getComputerChoice();