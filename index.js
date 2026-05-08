var gameLvl = 1;

$(document).keypress(function() {
    isGameStarted = true;
    $("h1").html("Level " + gameLvl);
    startGame();
});

function startGame() {
    var colorPicker = Math.floor((Math.random() * 4) + 1);
    console.log(colorPicker);
}