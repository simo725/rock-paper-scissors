let humanScore = 0
let computerScore = 0


function getHumanChoice(){

    let humanChoice = prompt("What's your choice? Rock, Paper or Scissor?");

    if (humanChoice.toLowerCase() === "rock") {

        console.log("Rock");
        return "Rock";

    } else if (humanChoice.toLowerCase() === "paper" ) {

        console.log("Paper");
        return "Paper";

    } else if (humanChoice.toLowerCase() === "scissors") {
        
        console.log("Scissors");
        return "Scissors";
       
    }

}



function getComputerChoice(){

    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0){

        console.log("Rock");
        return "Rock";

    } else if (computerChoice === 1){

        console.log("Paper");
        return "Paper";

    } else {

        console.log("Scissors");
        return "Scissors";

    }
}



function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice){
        console.log("Pair!");
    }
    
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {


        console.log("You win! Rock beat Scissors!");

    } else if (humanChoice === "Scissors" && computerChoice === "Paper"){

        console.log("You win! Scissors beat Paper!");

    } else if (humanChoice === "Paper" && computerChoice === "Rock") {

        console.log("You win! Paper beat Rock!");

    } else {

        console.log("You Lose!");
    }
}

  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);