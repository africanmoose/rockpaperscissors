function getComputerChoice(){
    // return string with one of the three options
    let intRandom = getRandomInt(3)

    switch(intRandom) {
    case 0:
        return "rock"
        break;
    case 1:
        return "paper"
        break;    
    break;
    case 2:
        return "scissors"
        break;
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function game(){
    //5 round game of rock paper scissors
    //keep score and report winner at end

    //variables
    let intComputerScore = 0;
    let intUserScore = 0;

    //get user prompt
    switch(playRound(prompt("Rock paper or scissors?"))){
        case 0: //user wins
            intUserScore = intUserScore + 1;
            break;
        case 1: //computer wins
            intComputerScore = intComputerScore + 1;
            break;
        case 3: 
            //draw: do nothing
    }

        switch(playRound(prompt("Rock paper or scissors?"))){
        case 0: //user wins
            intUserScore = intUserScore + 1;
            break;
        case 1: //computer wins
            intComputerScore = intComputerScore + 1;
            break;
        case 3: 
            //draw: do nothing
    }

        switch(playRound(prompt("Rock paper or scissors?"))){
        case 0: //user wins
            intUserScore = intUserScore + 1;
            break;
        case 1: //computer wins
            intComputerScore = intComputerScore + 1;
            break;
        case 3: 
            //draw: do nothing
    }

        switch(playRound(prompt("Rock paper or scissors?"))){
        case 0: //user wins
            intUserScore = intUserScore + 1;
            break;
        case 1: //computer wins
            intComputerScore = intComputerScore + 1;
            break;
        case 3: 
            //draw: do nothing
    }

        switch(playRound(prompt("Rock paper or scissors?"))){
        case 0: //user wins
            intUserScore = intUserScore + 1;
            break;
        case 1: //computer wins
            intComputerScore = intComputerScore + 1;
            break;
        case 3: 
            //draw: do nothing
    }

    if (intUserScore > intComputerScore){
        console.log ("You win! You scored: " + intUserScore + " to Computer: " + intComputerScore)
        } 
        else if (intUserScore < intComputerScore){
        console.log ("You Lose! You scored: " + intUserScore + " to Computer: " + intComputerScore)
        }
        else {
        console.log ("You drew. You scored: " + intUserScore + " to Computer: " + intComputerScore)
        }
    
}

function playRound(getUserChoice){
    //case insensitive
    let strUserChoice = getUserChoice.toLowerCase();

    // variables
    let strComputerChoice = getComputerChoice();
    let intComputerWin = 0; //0 = user wins, 1 = user loses, 2=draw

    //compare results, return winner
    //first eliminate draw situation
    if (strComputerChoice == strUserChoice)
        {
            intComputerWin = 2
        }
    else {
        switch(strUserChoice){
        case "rock":
            if (strComputerChoice == "paper") {
                intComputerWin = 1;
                }
            break;
        case "scissors":
            if (strComputerChoice == "rock") {
                intComputerWin = 1;
                }
            break;
        case "paper":
            if (strComputerChoice == "scissors") {
                intComputerWin = 1;
                }
            break;
        }
 
        }
    
    //output to console
    getPrettyMessage(intComputerWin, strComputerChoice, strUserChoice);
    return intComputerWin;

}

function getPrettyMessage(intMessageNumber, strComputerChoice, strUserChoice){
    switch (intMessageNumber) {
        case 0: //user wins
            console.log("you win! " + strUserChoice + " beats " + strComputerChoice);
            break;
        case 1: //user loses
            console.log("you lose! " + strComputerChoice + " beats " + strUserChoice);
            break;
        case 2: //draw
            console.log("you draw, try again. You both chose " + strComputerChoice);
        }
}   
