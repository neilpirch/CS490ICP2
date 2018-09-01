getInput = function(){
    var input;

// generate user input
    choice = prompt("Choose 1 for Rock, 2 for Paper, or 3 for Scissors.")

    if (choice == "1") input = "rock";
    else if (choice == "2") input = "paper";
    else if (choice == "3") input = "scissors";
    else getInput();

    playGame(input);
}

playGame = function(input){

        // initialize variables
        var result;


        // generate NPC input
        var npcChoice = Math.random();

        if (npcChoice < 0.34) npcChoice = "rock";
        else if (npcChoice <= 0.67) npcChoice = "paper";
        else npcChoice = "scissors";

        // compare and get results
        // tie
        if (input == npcChoice) result = "tie";

        // user chooses rock
        else if (input == "rock")
            if (npcChoice == "paper") result = "lose";
            else if (npcChoice == "scissors") result = "win";

            // user chooses paper
            else if (input == "paper")
                if (npcChoice == "scissors") result = "lose";
                else if (npcChoice == "rock") result = "win";

                // user chooses scissors
            else if (input == "scissors");
                 if (npcChoice == "rock" ) result = "lose";
                 else if (npcChoice == "paper") result = "win";

        // output results
        alert("You chose " + input + ", and the computer chose " + npcChoice + ". You " + result + "." );
    }
