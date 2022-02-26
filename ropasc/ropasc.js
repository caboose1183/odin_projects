let choice = ["rock", "paper", "scissor"];
let playerWin = 0;
let computerWin = 0;

let count = 0;



function computerPlay (choice) {

    return choice[Math.floor(Math.random() * choice.length)];
}


function playRound (playerSelection, computerSelection) {

    if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection.toUpperCase() === "ROCK") {
            return "Draw! The score is " + playerWin + " to " + computerWin + ".";
        } else if (computerSelection.toUpperCase() === "PAPER") {
            computerWin ++;
            return "You Lose! Paper beats Rock. The score is " + playerWin + " to " + computerWin + ".";
        } else {
            playerWin ++;
            return "You Win! Rock beats Scissor. The score is " + playerWin + " to " + computerWin + ".";
        }


    } else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection.toUpperCase() === "PAPER") {
            return "Draw! The score is " + playerWin + " to " + computerWin + ".";
        } else if (computerSelection.toUpperCase() === "ROCK") {
            playerWin ++;
            return "You Win! Paper beats Rock. The score is " + playerWin + " to " + computerWin + ".";
        } else {
            computerWin ++;
            return "You Lose! Scissor beats Paper. The score is " + playerWin + " to " + computerWin + ".";
        }


    } else if (playerSelection.toUpperCase() === "SCISSOR") {
        if (computerSelection.toUpperCase() === "SCISSOR") {
            return "Draw! The score is " + playerWin + " to " + computerWin + ".";
        } else if (computerSelection.toUpperCase() === "PAPER") {
            playerWin ++;
            return "You Win! Scissor beats Paper. The score is " + playerWin + " to " + computerWin + ".";
        } else {
            computerWin ++;
            return "You Lose! Rock beats Scissor. The score is " + playerWin + " to " + computerWin + ".";
        }
    } else {
        return "Not an option"
    }    
}


//this is for making 5 rounds in console

// function game () {


//     for (let i = 0; i < 5; i++) {

//         let playerSelection = prompt ("Rock, paper or scissor?");
//         let computerSelection = computerPlay(choice);

//         console.log (playRound (playerSelection, computerSelection));

//         console.log ("The score is " + playerWin + " to " + computerWin + ".");
        
//     }

//     if (playerWin > computerWin) {
//         return "You won the game! It was " + playerWin + " to " + computerWin;
//     } else if (playerWin < computerWin) {
//         return "You lost the game! It was " + playerWin + " to " + computerWin;
//     } else {
//         return "It's a tie! It was " + playerWin + " to " + computerWin;
//     }

// }




const buttons = document.querySelectorAll ("button");

buttons.forEach ((button) => {
    button.addEventListener ("click", () => {

        
        let playerSelection = button.id;
        let computerSelection = computerPlay(choice);

        

        let newDiv = document.createElement ("div");
        newDiv.classList.add ("content");
        document.body.appendChild (newDiv);
        newDiv.textContent = playRound (playerSelection, computerSelection);

        count++
        console.log (count);
        console.log (playerWin);
        

        if (count === 5) {
            if (playerWin > computerWin) {
                playerWin = 0;
                computerWin = 0;
                count = 0;
                alert ( "You won the game! It was " + playerWin + " to " + computerWin);
            } else if (playerWin < computerWin) {
                playerWin = 0;
                computerWin = 0;
                count = 0;
                alert ( "You lost the game! It was " + playerWin + " to " + computerWin);
            } else {
                playerWin = 0;
                computerWin = 0;
                count = 0;
                alert ( "It's a tie! It was " + playerWin + " to " + computerWin);
            }
        }
        
    });
});
