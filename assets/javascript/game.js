
$(document).ready(function () {
    var playerScore = 0;
    var crystalOne;
    var crystalTwo;
    var crystalThree;
    var crystalFour;





    var targetScore = Math.floor(Math.random() * 101) + 19;
    console.log("Target Score");
    console.log(targetScore);

    $("#target-score").text(targetScore);

    var randomNum1 = Math.floor(Math.random() * 12) + 1;
    var randomNum2 = Math.floor(Math.random() * 12) + 1;
    var randomNum3 = Math.floor(Math.random() * 12) + 1;
    var randomNum4 = Math.floor(Math.random() * 12) + 1;
    var wins = 0;
    var losses = 0;

    $('#redGem').on("click", function () {
        crystalOne = randomNum1;
        playerScore += crystalOne;

        if (playerScore == targetScore) {
            wins++;
            $('#wins').text(wins);
            playerScore = 0;
            $('#player-score').text(playerScore);
            targetScore = Math.floor(Math.random() * 101) + 19;
            $("#target-score").text(targetScore);
            randomNum1 = Math.floor(Math.random() * 12) + 1;
            randomNum2 = Math.floor(Math.random() * 12) + 1;
            randomNum3 = Math.floor(Math.random() * 12) + 1;
            randomNum4 = Math.floor(Math.random() * 12) + 1;
            $('#wins').text(wins);
            $('#losses').text(losses);
            console.log("Crystal One: " + crystalOne);
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
            randomNum1 = Math.floor(Math.random() * 12) + 1;
            randomNum2 = Math.floor(Math.random() * 12) + 1;
            randomNum3 = Math.floor(Math.random() * 12) + 1;
            randomNum4 = Math.floor(Math.random() * 12) + 1;
            $('#wins').text(wins);
            $('#losses').text(losses);
            console.log("Crystal One: " + crystalOne);
            console.log("Player Score: " + playerScore);
            console.log("Target Score: " + targetScore);
            alert("Doooh! You took a loss! Try again!");
        } else {
            $("#player-score").text(playerScore);
            console.log(playerScore);
            $('#wins').text(wins);
            $('#losses').text(losses);
            console.log("Crystal One: " + crystalOne);
            console.log("Player Score: " + playerScore);
            console.log("Target Score: " + targetScore);
        }
    });

    $('#blueGem').on("click", function () {
        crystalTwo = randomNum2;
        playerScore += crystalTwo;
        if (playerScore == targetScore) {
            wins++;
            $('#wins').text(wins);
            playerScore = 0;
            $('#player-score').text(playerScore);
            targetScore = Math.floor(Math.random() * 101) + 19;
            $("#target-score").text(targetScore);
            randomNum1 = Math.floor(Math.random() * 12) + 1;
            randomNum2 = Math.floor(Math.random() * 12) + 1;
            randomNum3 = Math.floor(Math.random() * 12) + 1;
            randomNum4 = Math.floor(Math.random() * 12) + 1;
            $('#wins').text(wins);
            $('#losses').text(losses);
            console.log("Crystal Two: " + crystalTwo);
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
            randomNum1 = Math.floor(Math.random() * 12) + 1;
            randomNum2 = Math.floor(Math.random() * 12) + 1;
            randomNum3 = Math.floor(Math.random() * 12) + 1;
            randomNum4 = Math.floor(Math.random() * 12) + 1;
            $('#wins').text(wins);
            $('#losses').text(losses);
            console.log("Crystal Two: " + crystalTwo);
            console.log("Player Score: " + playerScore);
            console.log("Target Score: " + targetScore);
            alert("Doooh! You took a loss! Try again!");
        } else {
            $("#player-score").text(playerScore);
            console.log(playerScore);
            $('#wins').text(wins);
            $('#losses').text(losses);
            console.log("Crystal Two: " + crystalTwo);
            console.log("Player Score: " + playerScore);
            console.log("Target Score: " + targetScore);
        }
    });

    $('#yellowGem').on("click", function () {
        crystalThree = randomNum3;
        playerScore += crystalThree;
        if (playerScore == targetScore) {
            wins++;
            $('#wins').text(wins);
            playerScore = 0;
            $('#player-score').text(playerScore);
            targetScore = Math.floor(Math.random() * 101) + 19;
            $("#target-score").text(targetScore);
            randomNum1 = Math.floor(Math.random() * 12) + 1;
            randomNum2 = Math.floor(Math.random() * 12) + 1;
            randomNum3 = Math.floor(Math.random() * 12) + 1;
            randomNum4 = Math.floor(Math.random() * 12) + 1;
            $('#wins').text(wins);
            $('#losses').text(losses);
            console.log("Crystal Three: " + crystalThree);
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
            randomNum1 = Math.floor(Math.random() * 12) + 1;
            randomNum2 = Math.floor(Math.random() * 12) + 1;
            randomNum3 = Math.floor(Math.random() * 12) + 1;
            randomNum4 = Math.floor(Math.random() * 12) + 1;
            $('#wins').text(wins);
            $('#losses').text(losses);
            console.log("Crystal Three: " + crystalThree);
            console.log("Player Score: " + playerScore);
            console.log("Target Score: " + targetScore);
            alert("Doooh! You took a loss! Try again!");
        } else {
            $("#player-score").text(playerScore);
            console.log(playerScore);
            $('#wins').text(wins);
            $('#losses').text(losses);
            console.log("Crystal Three: " + crystalThree);
            console.log("Player Score: " + playerScore);
            console.log("Target Score: " + targetScore);
        }
    });

    $('#greenGem').on("click", function () {
        crystalFour = randomNum4;
        playerScore += crystalFour;

        if (playerScore == targetScore) {
            wins++;
            playerScore = 0;
            $('#player-score').text(playerScore);
            targetScore = Math.floor(Math.random() * 101) + 19;
            $("#target-score").text(targetScore);
            randomNum1 = Math.floor(Math.random() * 12) + 1;
            randomNum2 = Math.floor(Math.random() * 12) + 1;
            randomNum3 = Math.floor(Math.random() * 12) + 1;
            randomNum4 = Math.floor(Math.random() * 12) + 1;
            $('#wins').text(wins);
            $('#losses').text(losses);
            console.log("Crystal Four: " + crystalFour);
            console.log("Player Score: " + playerScore);
            console.log("Target Score: " + targetScore);
            alert("There's a WIN!!!");
        } else if (playerScore >= targetScore) {
            losses++;
            playerScore = 0;
            $('#player-score').text(playerScore);
            targetScore = Math.floor(Math.random() * 101) + 19;
            $("#target-score").text(targetScore);
            randomNum1 = Math.floor(Math.random() * 12) + 1;
            randomNum2 = Math.floor(Math.random() * 12) + 1;
            randomNum3 = Math.floor(Math.random() * 12) + 1;
            randomNum4 = Math.floor(Math.random() * 12) + 1;
            console.log("Crystal Four: " + crystalFour);
            console.log("Player Score: " + playerScore);
            console.log("Target Score: " + targetScore);
            $('#wins').text(wins);
            $('#losses').text(losses);
            alert("Doooh! You took a loss! Try again!");
        } else {
            $("#player-score").text(playerScore);
            console.log(playerScore);
            $('#wins').text(wins);
            $('#losses').text(losses);
            console.log("Crystal Four: " + crystalFour);
            console.log("Player Score: " + playerScore);
            console.log("Target Score: " + targetScore);

        }
    });

});

