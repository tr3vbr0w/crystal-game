// Variable Initialization
var wins = 0;
var losses = 0;
var crystalOneVal = 0;
var crystalTwoVal = 0;
var crystalThreeVal = 0;
var crystalFourVal = 0;
var matchScore = 0;
var myScore = 0;
var isPlaying = false;



// JQuery function 
$(document).ready(function() {

  
    // Computes score that user is to match on a random number
    
    function startGame() {
        if (isPlaying === false) {
            myScore = 0;
            $("#your-score").text("0");
            matchScore = Math.floor(Math.random() * (101)) + 19;
            $("#match-score").text("Score to match is: " + matchScore);
            crystalOneVal = Math.floor(Math.random() * (11) +1 );
            console.log(crystalOneVal);
            crystalTwoVal = Math.floor(Math.random() * (11) +1 );
            console.log(crystalTwoVal);
            crystalThreeVal = Math.floor(Math.random() * (11) +1 );
            console.log(crystalThreeVal);
            crystalFourVal = Math.floor(Math.random() * (11) +1 );
            console.log(crystalFourVal);
            isPlaying = true;
            // matchScore = 0;
            // myScore = 0;
        }

    }
//Comparison Statements designed to determine whether or not the user has won or lost. Additionally, these if statements will reset the game if the user achieves a win or loss. 

    function winLoss() {
        if (myScore === matchScore) {
            wins++;
            $("#wins").text("Wins: " + wins.toString());
            isPlaying = false;
            console.log("Wins: " + wins);
            startGame();
    }
        else if (myScore > matchScore) {
            losses++;
            console.log("Losses: " + losses);
            isPlaying = false;
            $("#losses").text("Losses: " + losses.toString());
            startGame();
     }
 }
    
        
    startGame();

    // Click events that handle when a button on the page is clicked


    $('#crystal-1').click(function() {
        myScore = myScore + crystalOneVal;
        $("#your-score").text(myScore.toString());  
        winLoss();
    });
    $('#crystal-2').click(function() {
        myScore = myScore + crystalTwoVal;
        $("#your-score").text(myScore.toString()); 
        winLoss();                 
    });
    $('#crystal-3').click(function() {
        myScore = myScore + crystalThreeVal;
        $("#your-score").text(myScore.toString());
        winLoss(); 
    });
    $('#crystal-4').click(function() {
        myScore = myScore + crystalFourVal;
        $("#your-score").text(myScore.toString());  
        winLoss();
    });

    

    
 
        
});