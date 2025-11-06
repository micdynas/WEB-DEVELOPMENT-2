var buttonColors = ["red", "blue", "green", "yellow" ];
var gamePattern = [];
var userClickedPattern = [];


function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
     console.log("nextSequence() called!");

     level++;





    $(".btn").on("click", function(){

            $("#" + randomChosenColor).animate({ opacity: 0.2 }, 100) 
           .animate({ opacity: 1 }, 100)
           .animate({ opacity: 0.2 }, 100)
           .animate({ opacity: 1 }, 100); 
        
     
         });
}

nextSequence();
        

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
         
         function animatePress() {
          
        $(".btn").on("click", function () {


          $(this).addClass("pressed");

          setTimeout(function() {
            $(".btn").removeClass("pressed");
          }, 100);
          })
         }
animatePress();

var gameStarted = false;
      
$(document).on("keyDown", function () {
  if (!gameStarted) {
    nextSequence();
    gameStarted = true;
  }
})

var level = 0

if(!gameStarted === true){
  $("#level-title").innerHTML = "Level" + level;

}



