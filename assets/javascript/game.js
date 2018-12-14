var tWins = 0;
var tLosses = 0;
var yNum = 0 ;
var tNum ;
var points ; 
var ballOne;
var ballTwo;
var ballThree;
var ballFour;

function reset() {
    points = 0;
    tNum = Math.floor(Math.random() * 120) + 19;
    console.log(tNum);
    $("#tNum").text(tNum);
    yNum = 0;
    console.log(yNum);
    ballOne = Math.floor(Math.random() * 12) + 1;  
    console.log(ballOne);
    ballTwo = Math.floor(Math.random() * 12) + 1; 
    console.log(ballTwo) 
    ballThree = Math.floor(Math.random() * 12) + 1; 
    console.log(ballThree); 
    ballFour = Math.floor(Math.random() * 12) + 1;
    console.log(ballFour);  

};

function play() {
    $("#ball1").on("click", function() {
        console.log(ballOne + " is the amount of points you added");
        yNum = yNum + ballOne;
        console.log(yNum);
        $("#yNum").text(yNum);
        console.log(yNum + " vs " + tNum);
        scoreCheck();
    });
    $("#ball2").on("click", function() {
        console.log(ballTwo + " is the amount of points you added");
        yNum = yNum + ballTwo;
        console.log(yNum);
        $("#yNum").text(yNum);
        console.log(yNum + " vs " + tNum);
        scoreCheck();
    });
    $("#ball3").on("click", function() {
        console.log(ballThree + " is the amount of points you added");
        yNum = yNum + ballThree;
        console.log(yNum);
        $("#yNum").text(yNum);
        console.log(yNum + " vs " + tNum);
        scoreCheck();
    });
    $("#ball4").on("click", function() {
        console.log(ballFour + " is the amount of points you added");
        yNum = yNum + ballFour;
        console.log(yNum);
        $("#yNum").text(yNum);
        console.log(yNum + " vs " + tNum);
        scoreCheck();
    });

    
};

function scoreCheck() {
    
    if ( yNum === tNum) {
       console.log("its a match");
       tWins++;
       $("#tWins").text(tWins);
       $("#yNum").text(yNum);
       alert("You Win Homie!");
       reset();

    } else if ( yNum > tNum ) {
        console.log("its a nay");
        tLosses++;
        $("#tLosses").text(tLosses);
        $("#yNum").text(yNum);
        alert("You Lose, How Sad.");
        reset();
    }


};


reset();
play();
scoreCheck();

