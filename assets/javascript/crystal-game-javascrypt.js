var yourScore = document.getElementById('yourScore');
//var yourScore = getElementById(red, blue, yellow, green.onclick(math.sum));
yourScore.innerHTML = 0; //
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue();

function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
}

function reset() {

    time = 0;
    lap = 1;
  
    // DONE: Change the "display" div to "00:00."
    $("#display").text("00:00");
  
    // DONE: Empty the "laps" div.
    $("#laps").text("");
  }
var red = document.getElementById("red");
//console.log(red.value);

var blue = document.getElementById("blue");
//console.log(blue.value);

var yellow = document.getElementById("yellow");
//console.log(yellow.value);

var green = document.getElementById("green");
//console.log(green.value);

// add an event listener to elements
red.addEventListener('click', function() {
  //this refers to red
  addToScore(this.value);
  checkPlayerScore();
});

blue.addEventListener('click', function() {
  // this refers to blue
  addToScore(this.value);
  checkPlayerScore();
});

yellow.addEventListener('click', function() {
  // this refers to yellow
  addToScore(this.value);
  checkPlayerScore();
});

green.addEventListener('click', function() {
  // this refers to green
  addToScore(this.value);
  checkPlayerScore();
});

function getRandomValue (){
  return Math.floor(Math.random() * 99) + 19;
}

function checkPlayerScore() {
  //yourScore, targetScore (parseFloat() is for decimals)
  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(targetScore.innerHTML);
  if (playerInt === targetInt) {
      alert('You win!');
      
  } else if (playerInt > targetInt) {
    alert('You lose!');
  } 
}

console.log(getRandomValue());