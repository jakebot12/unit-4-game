
$(document).ready(function () {
    var playerScore = 0;
    var crystalOne;
    var crystalTwo;
    var crystalThree;
    var crystalFour;
    var randomNum1 = Math.floor(Math.random() * 12) + 1;
    var randomNum2 = Math.floor(Math.random() * 12) + 1;
    var randomNum3 = Math.floor(Math.random() * 12) + 1;
    var randomNum4 = Math.floor(Math.random() * 12) + 1;




    var targetScore = Math.floor(Math.random() * 101) + 19;
    console.log("Target Score");
    console.log(targetScore);

    $("#target-score").text(targetScore);

    function newRandomNumbers() {
        randomNum1 = Math.floor(Math.random() * 12) + 1;
        randomNum2 = Math.floor(Math.random() * 12) + 1;
        randomNum3 = Math.floor(Math.random() * 12) + 1;
        randomNum4 = Math.floor(Math.random() * 12) + 1;
    }

    var wins = 0;
    var losses = 0;

    function checkWin() {
        if (playerScore == targetScore) {
            wins++;
            $('#wins').text(wins);
            playerScore = 0;
            $('#player-score').text(playerScore);
            targetScore = Math.floor(Math.random() * 101) + 19;
            $("#target-score").text(targetScore);
            newRandomNumbers();
            $('#wins').text(wins);
            $('#losses').text(losses);
            console.log("Player Score: " + playerScore);
            console.log("Target Score: " + targetScore);
            alert("There's a WIN!!!");

        } else if (playerScore >= targetScore) {
            losses++;
            $('#losses').text(losses);
            playerScore = 0;
            $('#player-score').text(playerScore);
            targetScore = Math.floor(Math.random() * 101) + 19;
            $("#target-score").text(targetScore);
            newRandomNumbers();
            $('#wins').text(wins);
            $('#losses').text(losses);
            console.log("Player Score: " + playerScore);
            console.log("Target Score: " + targetScore);
            alert("Doooh! You took a loss! Try again!");
        } else {
            $("#player-score").text(playerScore);
            $('#wins').text(wins);
            $('#losses').text(losses);
            console.log("Player Score: " + playerScore);
            console.log("Target Score: " + targetScore);
        }
    }
    $('#redGem').on("click", function () {
        crystalOne = randomNum1;
        playerScore += crystalOne;
        console.log("Crystal One: " + crystalOne);
        checkWin();
    });

    $('#blueGem').on("click", function () {
        crystalTwo = randomNum2;
        playerScore += crystalTwo;
        console.log("Crystal Two: " + crystalTwo);
        checkWin();
    });

    $('#yellowGem').on("click", function () {
        crystalThree = randomNum3;
        playerScore += crystalThree;
        console.log("Crystal Three: " + crystalThree);
        checkWin();
    });

    $('#greenGem').on("click", function () {
        crystalFour = randomNum4;
        playerScore += crystalFour;
        console.log("Crystal Four: " + crystalFour);
        checkWin();
    });

});

