document.querySelector(".playing").addEventListener("click", () => {
    var scoreOne = Math.floor(Math.random()*6) + 1;

    var imageOne = "images/dice" + scoreOne + ".png";

    var newImage1 = document.querySelector(".p1");

    newImage1.setAttribute("src", imageOne);

    var scoreTwo = Math.floor(Math.random()*6) + 1;

    var imageTwo = "images/dice" + scoreTwo + ".png";

    var newImage2 = document.querySelector(".p2");

    newImage2.setAttribute("src", imageTwo);

    if(scoreOne>scoreTwo){  
        document.querySelector(".result").innerHTML = "! Player 1 wins !"
    }

    else if(scoreOne<scoreTwo){ 
        document.querySelector(".result").innerHTML = "! Player 2 wins !"
    }

    else{
        document.querySelector(".result").innerHTML = "! DRAW !"
    }
})