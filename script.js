//Determine the computer play
function computerPlay () {
  const arrayOfChoices = ['rock', 'paper', 'scissors'];
  const num = Math.floor(Math.random() * arrayOfChoices.length);
  return arrayOfChoices[num];
}

const endGame = function printEndOfGameMessage(result){
  const para = document.getElementById('result');
  let playerScore = document.getElementById('playerScore').textContent;
  let computerScore = document.getElementById('computerScore').textContent;

  result === 'W' ?  
    para.textContent = `You Win the Game ${playerScore} - ${computerScore}`
    : para.textContent = `You Lose the Game ${playerScore} - ${computerScore}`;

  document.getElementById('playerScore').textContent = '0';
  document.getElementById('computerScore').textContent = '0';
}

const updateScore = function updatesTheScoreGivenTheResult(result){
  if (result === 'W'){
    let score = document.getElementById('playerScore');
    score.textContent = `${Number(score.textContent) + 1}`;
    if (score.textContent === '5') endGame(result);
  }
  else {
    let score = document.getElementById('computerScore');
    score.textContent = `${Number(score.textContent) + 1}`;
    if (score.textContent === '5') endGame(result);
  }
}

function playRound (playerSelection) {
  const computerSelection = computerPlay();
  computerSelection - computerSelection.toLowerCase();

  if (playerSelection == 'rock'){
    printRoundResults('D', playerSelection, computerSelection);
      if (computerSelection == 'rock'){
      } else if (computerSelection == 'paper'){
        printRoundResults('L', playerSelection, computerSelection);
        updateScore('L');
      } else{
        printRoundResults('W', playerSelection, computerSelection);
        updateScore('W'); 
      }
    } 
  else if (playerSelection == 'paper'){
    printRoundResults('D', playerSelection, computerSelection);
    if (computerSelection == 'paper'){
    } else if (computerSelection == 'scissors'){
      printRoundResults('L', playerSelection, computerSelection);
      updateScore('L');
    } else{
      printRoundResults('W', playerSelection, computerSelection);
      updateScore('W'); 
    }
  } 
  else if (playerSelection == 'scissors'){
    printRoundResults('D', playerSelection, computerSelection);
    if (computerSelection == 'scissors'){
    } else if (computerSelection == 'rock'){
      printRoundResults('L', playerSelection, computerSelection);
      updateScore('L');
    } else{
      printRoundResults('W', playerSelection, computerSelection);
      updateScore('W'); 
    }
  }

  return 'W';
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

  return result;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    return button.addEventListener('click', () => {
      return playRound(button.id);
    });
  });
 
