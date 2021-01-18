//Determine the computer play
function computerPlay () {
  const arrayOfChoices = ['rock', 'paper', 'scissors'];
  const num = Math.floor(Math.random() * arrayOfChoices.length);
  return arrayOfChoices[num];
}
/*
function playerPlay () {
  const choice = prompt('Select your move');
  return choice;
}
*/
//Determines the result of the round
function playRound (playerSelection) {
  const computerSelection = computerPlay();
  computerSelection - computerSelection.toLowerCase();

  if (playerSelection == 'rock'){
      if (computerSelection == 'rock'){
        printRoundResults('D', playerSelection, computerSelection);
      } else if (computerSelection == 'paper'){
        printRoundResults('L', playerSelection, computerSelection);
      }
      else printRoundResults('W', playerSelection, computerSelection);
  } 
  else if (playerSelection == 'paper'){
    if (computerSelection == 'paper'){
      printRoundResults('D', playerSelection, computerSelection);
    } else if (computerSelection == 'scissors'){
      printRoundResults('L', playerSelection, computerSelection);
    }
    else printRoundResults('W', playerSelection, computerSelection);
  } 
  else if (playerSelection == 'scissors'){
    if (computerSelection == 'scissors'){
      printRoundResults('D', playerSelection, computerSelection);
    } else if (computerSelection == 'rock'){
      printRoundResults('L', playerSelection, computerSelection);
    }
    else printRoundResults('W', playerSelection, computerSelection);
  }
}

function printRoundResults (result, playerSelection, computerSelection) {
  const para = document.getElementById('result');
  if (result == 'W') {
    para.textContent = `You Win, ${playerSelection} beats ${computerSelection}`;
  }
  else if (result == 'L') {
    para.textContent = `You Lose, ${computerSelection} beats ${playerSelection}`;
  }
  else para.textContent = 'Draw';
}

/*
function determineWinner (playerScore, computerScore) {
  (playerScore > computerScore) ?
          console.log(`You Win ${playerScore} - ${computerScore}!`) : (
  (playerScore < computerScore) ? 
          console.log(`You Lose ${playerScore} - ${computerScore}`) : 
                  console.log(`Draw! Score is ${playerScore} - ${computerScore}`)
          )

}
*/
/*
function game () {
  let playerScore = 0, computerScore = 0;
  let result;

  while (playerScore !== 5 || computerScore !== 5){
    result = playRound(playerSelection(), computerPlay());
    if (result == 'W') playerScore++;
    else if(result =='L') computerScore++;
  }

  determineWinner(playerScore, computerScore);
}
*/
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    return button.addEventListener('click', () => {
      playRound(button.id);
    });
});
