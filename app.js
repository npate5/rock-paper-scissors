        // GAME
        "use strict"
        // this game is going to play against the computer
        // create a function "getComputerChoice" that will randomly return 'Rock,' 'Paper,' or 'Scissors'

        // use above function to make the computer play with you

        // use console to confirm expected output before moving onto the next step

        // create a function (two parameters) that plays a single round of Rock Paper Scissors

        // two parameters: playerSelection (make it case-insensitive), computerSelection

        // string that declares the winner of the round like so: "You Lose! Paper beats Rock"

        let playerScore = 0;
        let computerScore = 0;
        let roundWinner = ''

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                roundWinner = 'tie'
            }
            if (
                (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
                (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
                (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
            ) {
                playerScore++
                roundWinner = 'player'
            }
            if (
                (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
                (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
                (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
            ) {
                computerScore++
                roundWinner = 'computer'
            }
            updateScoreMessage(roundWinner, playerSelection, computerSelection)
        }

        function getRandomChoice() {
            let randomNumber = Math.floor(Math.random() * 3)
            switch (randomNumber) {
                case 0:
                    return 'ROCK'
                case 1:
                    return 'PAPER'
                case 2:
                    return 'SCISSORS'
            }
        }

        function isGameOver() {
            return playScore === 5 || computerScore === 5
        }

        // UI

        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));