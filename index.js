var gameLvl = 1;
let isGameStarted = false;
var gamePattern = [];
var playerStep = 0;
var playerChoice;
var gamePatternGenerator = 0;
var highestScore = gameLvl;

$(document).keypress(function() {
    if (isGameStarted == true) {
        return;
    }
    gameLvl = 1;
    $("h1").html("Level " + gameLvl);
    isGameStarted = true;
    startGame();
});

function startGame() {
    gamePatternGenerator = Math.floor((Math.random() * 4) + 1);
    gamePattern.push(gamePatternGenerator);
    switch(gamePatternGenerator) {
        case 1:
            $(".button1").animate({
                opacity: 0.25,
            }, 150, function() {
                $(this).animate({
                    opacity: 1,
                })
            });
            break;
        case 2:
            $(".button2").animate({
                opacity: 0.25,
            }, 150, function() {
                $(this).animate({
                    opacity: 1,
                })
            });
            break;
        case 3:
            $(".button3").animate({
                opacity: 0.25,
            }, 150, function() {
                $(this).animate({
                    opacity: 1,
                })
            });
            break;
        case 4:
            $(".button4").animate({
                opacity: 0.25,
            }, 150, function() {
                $(this).animate({
                    opacity: 1,
                })
            });
            break;
    }

    console.log(gamePattern);
}

$(".playing-field").click(function() {
    playerChoice = $(this).data("number");
    if (playerChoice === gamePattern[playerStep]) {
        if (playerStep === gamePattern.length - 1) {
            playerStep = 0;
            gameLvl++;
            $("h1").html("Level " + gameLvl);
            startGame(); 
            if (gameLvl > highestScore) {
                highestScore = gameLvl;
                $("p").html("High Score: " + highestScore);
            }
        } else {
            playerStep++;
        }
    } else {
        $("html").css("background-color", "red");
        setTimeout(function() {
            $("html").css("background-color", "#241E3F");
        }, 200);
        isGameStarted = false;
        playerStep = 0;
        gamePattern = [];
        $("h1").html("You lost, you idiot sandwhich! <br> Press 'space' and try again!");
    }
    console.log(playerChoice);
});
