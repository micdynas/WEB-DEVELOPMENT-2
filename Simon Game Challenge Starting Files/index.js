// var buttonColors = ["red", "blue", "green", "yellow" ];
// var gamePattern = [];


// function nextSequence() {
//     var randomNumber = Math.floor(Math.random() * 3) + 1;
//     var randomChosenColor = buttonColors[randomNumber];
//     gamePattern.push(randomChosenColor);
    
//     $(document).on( "click", function(event){
//         $("#blue").animate({opacity:0.5}, 500, function(){
//             $(event).animate({opactiy:1}, 500);
//         });
//     });
// }

var buttonColors = ["red", "blue", "green", "yellow" ];
var randomNumber = Math.floor(Math.random() * 3) + 1;
    var randomChosenColor = buttonColors[randomNumber];

    

    $(document).ready( function(){
        $("#" + randomChosenColor).on("click", function(){
            $button = $(this);

            button.animate({ opacity: 0.2 }, 100) 
           .animate({ opacity: 1 }, 100)
           .animate({ opacity: 0.2 }, 100)
           .animate({ opacity: 1 }, 100); 
        })

    });
//     $(document).ready(function() {
//   $("#myButton").on("click", function() {
//     var $button = $(this);

//     // Animate opacity to create a flash effect
//     $button.animate({ opacity: 0.2 }, 100) // Fade out quickly
//            .animate({ opacity: 1 }, 100)  // Fade back in quickly
//            .animate({ opacity: 0.2 }, 100) // Fade out again
//            .animate({ opacity: 1 }, 100); // Fade back in

    // Alternatively, animate background color for a flash effect
    // $button.animate({ backgroundColor: "#ff0000" }, 100) // Change to red
    //        .animate({ backgroundColor: "#ffffff" }, 100) // Change back to white
    //        .animate({ backgroundColor: "#ff0000" }, 100)
    //        .animate({ backgroundColor: "#ffffff" }, 100);
 