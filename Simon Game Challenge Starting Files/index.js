var buttonColors = ["red", "blue", "green", "yellow" ];
var gamePattern = [];
var userClickedPattern = [];


function nextSequence() {
   
level++;
$("#level-title").text("Level " + level);



    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
     console.log("nextSequence() called!");

 $(".btn").on("click", function(){

            $("#" + randomChosenColor).animate({ opacity: 0.2 }, 100) 
           .animate({ opacity: 1 }, 100)
           .animate({ opacity: 0.2 }, 100)
           .animate({ opacity: 1 }, 100); 
        
     
         });







}

var level = 0;
var gameStarted = false;
      
$(document).on("keyDown", function() {
  if (!gameStarted) {
     $("#level-title").text("Level " + level);
     nextSequence();
    gameStarted = true;
  }
});
        






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





