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
        return humanScore++;

    } else if (humanChoice === "Scissors" && computerChoice === "Paper"){

        console.log("You win! Scissors beat Paper!");
        return humanScore++;

    } else if (humanChoice === "Paper" && computerChoice === "Rock") {

        console.log("You win! Paper beat Rock!");
        return humanScore++;

    } else {

        console.log("You Lose!");
        return computerScore++;
    }
}



  function playGame(){
    
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore === computerScore){

        console.log("PAIR!" , "Human Score: " , humanScore , "Computer Score: " , computerScore);

    } else if (humanScore > computerScore) {

        console.log("YOU WIN ! ! !" , "Human Score: " , humanScore , "Computer Score: " , computerScore);

  } else {

    console.log("YOU LOSE !" , "Human Score: " , humanScore , "Computer Score: " , computerScore);
  }
}

  playGame();