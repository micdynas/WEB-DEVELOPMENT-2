var buttonColors = ["red", "blue", "green", "yellow" ];
var gamePattern = [];


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
}