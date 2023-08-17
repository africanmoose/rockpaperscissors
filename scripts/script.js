//variables
    let intComputerScore = 0;
    let intUserScore = 0;
    let intComputerTotalScore = 0;
    let intUserTotalScore = 0;
    let intUserNumberOfRounds = 0;

    const btnRock = document.querySelector('button#btnRock');
    const btnPaper = document.querySelector('button#btnPaper');
    const btnScissors = document.querySelector('button#btnScissors');

//buttons
    btnRock.addEventListener("click",() => {
        
        playRound('Rock');
        checkForReset();
        });

    btnPaper.addEventListener("click",() => {
        playRound('Paper');
        checkForReset();
        });

    btnScissors.addEventListener("click",() => {
        playRound('Scissors');
        checkForReset();
        });

//functions
            
    function updateResultsPanel(strText) {
        const displayResultsPanel = document.getElementById("resultDisplayPanel");
        displayResultsPanel.textContent=strText 
    }

    function updateTotalsPanel(strText) {
        const displayResultsPanel = document.getElementById("scoreDisplayPanel");
        displayResultsPanel.textContent=strText 
    }

    
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
        
        
        //update running score
        if (intComputerWin == 0){
            intUserTotalScore = intUserTotalScore + 1;
        }
        else if (intComputerWin == 1){
            intComputerTotalScore = intComputerTotalScore + 1;
        }


        //output to console
        updateResultsPanel(getPrettyMessage(intComputerWin, strComputerChoice, strUserChoice));
        updateTotalsPanel('Score is Computer ' + intComputerTotalScore + ' You '  + intUserTotalScore);
        
        return intComputerWin;

    }

    function getPrettyMessage(intMessageNumber, strComputerChoice, strUserChoice){
        switch (intMessageNumber) {
            case 0: //user wins
                console.log("you win! " + strUserChoice + " beats " + strComputerChoice);
                return ("You win! " + strUserChoice + " beats " + strComputerChoice);
                break;
            case 1: //user loses
                console.log("you lose! " + strComputerChoice + " beats " + strUserChoice);
                return ("You lose! " + strComputerChoice + " beats " + strUserChoice);
                break;
            case 2: //draw
                console.log("you draw, try again. You both chose " + strComputerChoice);
                return ("You draw, try again. You both chose " + strComputerChoice);
            }
    }   

    function checkForReset(){
        //if we computer or user hits 5, declared overall winner and counters reset
        if (intComputerTotalScore > 4) {
            updateResultsPanel("Computer wins!")
            intComputerTotalScore = 0;
            intUserTotalScore = 0;
        }
        else if (intUserTotalScore > 4) {
            updateResultsPanel("You wins!")
            intComputerTotalScore = 0;
            intUserTotalScore = 0;

        }
    }