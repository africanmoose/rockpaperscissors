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

function playRound(getUserChoice){
    //case insensitivie
    let strUserChoice = getUserChoice.toLowerCase();

    // variables
    let strComputerChoice = getComputerChoice();
    let intComputerWin = 0; //0 = user wins, 1 = user loses, 2=draw

    //compare results, return winner
    //first eliminate draw situation
    if (strComputerChoice == strUserChoice)
         {intComputerWin = 2}
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

    switch (intComputerWin) {
        case 0: //user wins
            console.log("you win!");
            break;
        case 1: //user loses
            console.log("you lose!");
            break;
        case 2: //draw
            console.log("you draw, try again");
    }

}