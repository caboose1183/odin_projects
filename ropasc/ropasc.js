let choice = ["rock", "paper", "scissor"];

let playerWin = 0;
let computerWin = 0;



function computerPlay (choice) {

    return choice[Math.floor(Math.random() * choice.length)];
}





function playRound (playerSelection, computerSelection) {

    if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection.toUpperCase() === "ROCK") {
            return "Tie!";
        } else if (computerSelection.toUpperCase() === "PAPER") {
            computerWin ++;
            return "You Lose! Paper beats Rock";
        } else {
            playerWin ++;
            return "You Win! Rock beats Scissor";
        }


    } else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection.toUpperCase() === "PAPER") {
            return "Tie!!";
        } else if (computerSelection.toUpperCase() === "ROCK") {
            playerWin ++;
            return "You Win! Paper beats Rock";
        } else {
            computerWin ++;
            return "You Lose! Scissor beats Paper";
        }


    } else if (playerSelection.toUpperCase() === "SCISSOR") {
        if (computerSelection.toUpperCase() === "SCISSOR") {
            return "Tie";
        } else if (computerSelection.toUpperCase() === "PAPER") {
            playerWin ++;
            return "You Win! Scissor beats Paper";
        } else {
            computerWin ++;
            return "You Lose! Rock beats Scissor";
        }
    } else {
        return "Not an option"
    }    
}



// function playRound (playerSelection, computerSelection) {

//     if (playerSelection.toUpperCase() === "ROCK") {
//         if (computerSelection.toUpperCase() === "ROCK") {
//             console.log ("Tie!");
//         } else if (computerSelection.toUpperCase() === "PAPER") {
//             console.log ("You Lose! Paper beats Rock");
//         } else {
//             console.log ("You Win! Rock beats Scissor");
//         }


//     } else if (playerSelection.toUpperCase() === "PAPER") {
//         if (computerSelection.toUpperCase() === "PAPER") {
//             console.log ("Tie!!");
//         } else if (computerSelection.toUpperCase() === "ROCK") {
//             console.log ("You Win! Paper beats Rock");
//         } else {
//             console.log ("You Lose! Scissor beats Paper");
//         }


//     } else if (playerSelection.toUpperCase() === "SCISSOR") {
//         if (computerSelection.toUpperCase() === "SCISSOR") {
//             console.log ("Tie");
//         } else if (computerSelection.toUpperCase() === "PAPER") {
//             console.log ("You Win! Scissor beats Paper");
//         } else {
//             console.log ("You Lose! Rock beats Scissor");
//         }
//     } else {
//         console.log ("Not an option")
//     }    
// }





function game () {


    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt ("Rock, paper or scissor?");
        let computerSelection = computerPlay(choice);

        console.log (playRound (playerSelection, computerSelection));

        console.log ("The score is " + playerWin + " to " + computerWin + ".");
        
    }

    if (playerWin > computerWin) {
        return "You won the game! It was " + playerWin + " to " + computerWin;
    } else if (playerWin < computerWin) {
        return "You lost the game! It was " + playerWin + " to " + computerWin;
    } else {
        return "It's a tie! It was " + playerWin + " to " + computerWin;
    }

}




console.log (game())