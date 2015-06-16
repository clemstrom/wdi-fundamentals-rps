////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = "It's a tie!";
    }   else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "Player wins!";
    }   else  if (playerMove === "scissors" && computerMove === "rock") {
        winner = "Computer wins!";
    }   else  if (playerMove === "scissors" && computerMove === "paper") {
        winner = "Player wins!";
    }   else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "Computer wins!";
    }   else if (playerMove === "paper" && computerMove === "rock") {
        winner = "Player wins!";
    }   else if (playerMove === "rock" && computerMove === "paper") {
        winner = "Computer wins!";
    }
    return winner;
}

function playToFive() {
    
    console.log("Let's play Rock, Paper, Scissors");
    
    var playerWins = 0;
    var computerWins = 0;
     
    // This function should continue to play Rock Paper Scissors until either the
    // player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played
    // what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    /* YOUR CODE HERE */

    while (playerWins < 5 && computerWins < 5) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
        
    if (winner === 'Player wins!') {
        playerWins += 1;
    }
    if (winner === 'Computer wins!') {
        computerWins +=1;
    }
        
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log(winner);
    console.log('The score is currently Player:' + playerWins + ' to Computer:' + computerWins + '.');

    }
    return ("Final score: Player: " + playerWins + " vs Computer: " + computerWins);;

}

playToFive();