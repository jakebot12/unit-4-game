
$(document).ready(function(){




var playerScore  = (yourScore += addToScore); 
var random_target = 0;
var random_result = 0;
var losses ="";
var wins = "";
var crystals = "";


var targetScore = Math.floor(Math.random() * 80) + 19;
console.log(targetScore);

$("#target-score").text('Target Score: ' + targetScore);


for (var i = 0; i < 1; i++) {
    var randomValueOne = Math.floor(Math.random() * 5) + 1;
    console.log(randomValueOne);

    var crystalOne = $("#crystals");
    crystalOne.attr({"class":'crystalOne', "data-random": randomValueOne});

    $(".crystals").append(crystalOne);
    console.log(crystalOne);
}
for (var i = 0; i < 1; i++) {
    var randomValueTwo = Math.floor(Math.random() * 10) + 5;
    console.log(randomValueTwo);

    var crystalTwo = $("<div>");
    crystalTwo.attr({"class":'crystalTwo', "data-random": randomValueTwo});

    $(".crystals").append(crystalTwo);
    console.log(crystalTwo);
}
for (var i = 0; i < 1; i++) {
    var randomValueThree = Math.floor(Math.random() * 15) + 10;
    console.log(randomValueThree);

    var crystalThree = $("<div>");
    crystalThree.attr({"class":'crystalThree', "data-random": randomValueThree});

    $(".crystals").append(crystalThree);
    console.log(crystalThree);
}
for (var i = 0; i < 1; i++) {
    var randomValueFour = Math.floor(Math.random() * 20) + 15;
    console.log(randomValueFour);

    var crystalFour = $("<div>");
    crystalFour.attr({"class":'crystalFour', "data-random": randomValueFour});

    $(".crystals").append(crystalFour);
    console.log(crystalFour);
}

function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
}

function reset() {
    
}
var redGem = document.getElementById("redGem");


var blueGem = document.getElementById("blueGem");


var yellowGem = document.getElementById("yellowGem");


var greenGem = document.getElementById("greenGem");



redGem.addEventListener('click', function() {
 
  addToScore(this.value);
  checkScore();
});

blueGem.addEventListener('click', function() {
  
  addToScore(this.value);
  checkScore();
});

yellowGem.addEventListener('click', function() {
 
  addToScore(this.value);
  checkScore();
});

greenGem.addEventListener('click', function() {

  addToScore(this.value);
  checkScore();
});

function getRandomValue (){
  return Math.floor(Math.random() * 80) + 19;
}

function targetScore() {
  var playerScore = parseInt(yourScore.innerHTML);
  var targetScore = parseInt(targetScore.innerHTML);
  if (playerScore === targetScore) {
      alert('You win!');
      
  } else if (playerScore > targetScore) {
    alert('You lose!');
  } 
}

console.log(getRandomValue());
});