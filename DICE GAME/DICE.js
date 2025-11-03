// for dice 1
    var randomNumber1 = Math.round(Math.random() * 6) + 1;
    var randomDiceImage = "dice-six-faces-" + randomNumber1 + ".png";
    var randomImageSource = "images/" + randomDiceImage;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);
    
    // for dice 2
    var randomNumber2 = Math.round(Math.random() * 6) + 1;
    var  randomImageSource2 = "images/dice-six-faces-" + randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2 );
    
    
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    }
    else if (randomNumber1 < randomNumber2){
         document.querySelector("h1").innerHTML = "Player 2 wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }