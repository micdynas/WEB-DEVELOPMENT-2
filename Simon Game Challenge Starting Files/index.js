var buttonColors = ["red", "blue", "green", "yellow" ];
var gamePattern = [];
var userClickedPattern = [];


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
   
  $("#" + randomChosenColor).animate({ opacity: 0.2 }, 100) 
           .animate({ opacity: 1 }, 100)
           .animate({ opacity: 0.2 }, 100)
           .animate({ opacity: 1 }, 100); 
        
 userClickedPattern = [];
$("#level-title").text("Level " + level);
 level++;
}


// to play sound when clicked
$(".btn").on("click", function () {
          var userChosenColor = this.id ;
          userClickedPattern.push(userChosenColor);
          playSound(userChosenColor);
         
         })
         
         
         
         function playSound(userChosenColor) {
                  
          switch (userChosenColor) {
          case "blue":
           var green1 = new Audio("sounds/blue.mp3");
           green1.play();
            break;
            case "green":
           var blue1 = new Audio("sounds/green.mp3");
           blue1.play();
            break;
            case "red":
           var red1 = new Audio("sounds/red.mp3");
           red1.play();
            break;
            case "yellow":
           var yellow1 = new Audio("sounds/yellow.mp3");
           yellow1.play();
            break;
        
          default: 
            break;
        }

         }
         
         // to animate the button
         function animatePress() {
          
        $(".btn").on("click", function () {


          $(this).addClass("pressed");

          setTimeout(function() {
            $(".btn").removeClass("pressed");
          }, 100);
          })
         }
animatePress();

// To start the game 
var gameStarted = false;
$(document).on("keydown", function() {
  if (!gameStarted) {
    nextSequence();
    gameStarted = true;
  }});

var level = 1;

// Check answer
function checkAnswer(currentLevel) {
  // Check if the last answer the user clicked matches the game's pattern
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    // If it's correct, check if the user has completed the full sequence
    if (userClickedPattern.length === gamePattern.length) {
      console.log("success");
      // If successful, move to the next level after a delay
      setTimeout(nextSequence, 1000);
    } else {
      console.log("correct");
      // User is correct but the sequence isn't over
    }
  } 
  else {
    // Game over logic would go here
      $("body").addClass("game-over");
      setTimeout(function() {
            $("body").removeClass("game-over");
          }, 200);
      
          var wrong1 = new Audio("sounds/wrong.mp3");
           wrong1.play();
           startOver();
           

        
       
      }
   }



$(".btn").on("click", function() {
  checkAnswer(userClickedPattern.length - 1);
});
 
    //restart the game
           function startOver() {
             level = 1;
            gamePattern = [];
            gameStarted = false;
          $("#level-title").text("Game Over, Press Any Key to Restart");



           };

  
