var randomNumber = Math.floor((Math.random() * 100) + 1);
var userGuess = 0;
var diamond = Math.floor((Math.random() * 5) + 1);
var circle = Math.floor((Math.random() * 10) + 1);
var square = Math.floor((Math.random() * 15) + 1);
var green = Math.floor((Math.random() * 10) + 1);

$("#mainNumber").text(randomNumber);
$('#currentGuess').text(userGuess);

$("#diamond").on('click', function(){  
    userGuess = userGuess + diamond;
    $('#currentGuess').text(userGuess);
})

$("#circle").on('click', function(){
    userGuess = userGuess + circle;
    $('#currentGuess').text(userGuess);
})

$('#square').on('click', function(){
    userGuess = userGuess + square;
    $('#currentGuess').text(userGuess);
})

$('#green').on('click', function (){
    userGuess = userGuess + green;
    $('#currentGuess').text(userGuess);
})

