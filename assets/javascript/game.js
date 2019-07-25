// Variable Initialization, W, L crystal values 1-4, isPLaying to restart the game and set wins
$(document).ready(function() {
    
    var wins = 0;
    var losses = 0;
    var crystalOneVal = 0;
    var crystalTwoVal = 0;
    var crystalThreeVal = 0;
    var crystalFourVal = 0;
    var matchScore = 0;
    var myScore = 0;
    var isPlaying = false;

    function startGame() {
        var matchScore = Math.floor(Math.random() * (101)) + 19;
        console.log(matchScore);
        crystalOneVal = Math.floor(Math.random() * (11) +1 );
        crystalTwoVal = Math.floor(Math.random() * (11) +1 );
        crystalThreeVal = Math.floor(Math.random() * (11) +1 );
        crystalFourVal = Math.floor(Math.random() * (11) +1 );
        console.log("Button 1 Value " + crystalOneVal);
        console.log("Button 2 Value " + crystalTwoVal);
        console.log('Button 3 Value ' + crystalThreeVal);
        console.log("Button 4 Value "+ crystalFourVal);
    }
        
    startGame(); 

        $('.crystals').click(function() {
            myScore = myScore + this.value;
        });
        // $('#crystal-2').click(function() {
        //     myScore = myScore + crystalTwoVal;
        // });
        // $('#crystal-3').click(function() {
        //     myScore = myScore + crystalThreeVal;
        // });
        // $('#crystal-4').click(function() {
        //     myScore = myScore + crystalFourVal;
        // });

        $("#your-score").text(myScore.toString());
        console.log(myScore);
});




