let btn = document.querySelectorAll('button');
function gameOver() {
    throw new Error('Game Over');
}
btn.forEach((button) => {


    button.addEventListener('click', (e) => {

        let btns = button.id;

        const selected = document.querySelector(button.id);

        const fresult = document.querySelector('#fResult');
        if (playerScore > 4 && playerScore > computerScore) {

            fresult.textContent = " Player wins finally, Game Over. Click Reset to play again";
            // document.getElementById("playableButtons").setAttribute('disabled',"");
            //document.getElementById(btns).setAttribute('disabled',"");
            gameOver();

             //Using queryselectorall for all the buttons at once, need to find proper way to close the program.
            


        }
        else if (computerScore > 4 && computerScore > playerScore) {
            fresult.textContent = "Computer wins. Game Over. Click Reset to play again"
            //document.getElementById("playableButtons").classList.add("disable");
            //document.getElementById(btns).setAttribute('disabled',"");
            gameOver();

        }

        let result = playRound(btns.substring(0, btns.length - 6), computerPlay());

        const results = document.querySelector('#results');
        results.textContent = 'Result : ' + result;



    });
});




let options = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    let randomWord = options[Math.floor(Math.random() * options.length)];

    return randomWord;
}
/*function playersChoice() {
    let playerChoice = prompt("Enter your choice player");

    while (true) {
        if (playerChoice.toLowerCase() == "rock" || playerChoice.toLowerCase() == "paper" || playerChoice.toLowerCase() == "scissors") {
            break;                                                                                                                                                  Took players choice using prompt, now i am using buttons so disable this part.
        }
        else { playerChoice = prompt("Enter your choice, your previous choice not valid"); }


    }

    return playerChoice;
}*/

let playerScore = 0;
let computerScore = 0;


function playRound(playerschoice, computerschoice) {

    let result = "";
    let playerchoice = playerschoice.toLowerCase();
    let computerchoice = computerschoice.toLowerCase();

    const showCoices=document.querySelector('#showChoices');
    showCoices.textContent="Player's Choice is "+playerchoice+" & "+"Computer's Choice is "+computerchoice;

    if (playerchoice === computerchoice) {
        result = "No one Wins. It is a draw"
    }
    else if ((playerchoice == "scissors" && computerchoice == "paper") || (playerchoice == "paper" && computerchoice == "rock") ||
        (playerchoice == "rock" && computerchoice == "scissors")) {
        playerScore++;
        result = "You Win!!! " + playerchoice + " beats " + computerchoice;

    }
    else {
        computerScore++;
        result = " You Lose!" + computerchoice + " beats " + playerchoice;

    }
    const scores=document.querySelector('#scores');
    scores.textContent="Player's Score: "+playerScore+ " &  Computer's Score: "+computerScore;
    return result;

}