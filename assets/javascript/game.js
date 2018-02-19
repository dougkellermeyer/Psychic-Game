// On game start display wins, losses = 0
var wins=0;
var losses=0;
var remainingGuesses=9;
var lettersGuessed=[];
var gameOver=false;

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Capture the user's entry
document.onkeyup = function(event){
    console.log(event);
    var userGuess = event.key;
    console.log(event.key);
    lettersGuessed.push(userGuess);

    //Computer needs to guess a letter
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerGuess);

    //show that the userGuess is being registered
    if(alphabet.includes(userGuess)){
    console.log("userGuess is valid");
    remainingGuesses--;
    }

    //Need to compare the user's and computer's guess to see if they match. 
    if(userGuess===computerGuess){
            wins++
            alert("You win!");
            //I wanted to create a Gameover function but was having hard time making it work - this seemed easier :)
            remainingGuesses=9;
            lettersGuessed =[];
        }
    else{
        if(userGuess!==computerGuess){
                losses++
        }
        if(remainingGuesses===0){
            alert("Game over, try again!")
            //I wanted to create a Gameover function but was having hard time making it work - this seemed easier :)
            remainingGuesses=9;
            lettersGuessed=[];
        }
    }

document.getElementById("letters-guessed").textContent=lettersGuessed;
document.getElementById("losses").textContent=losses;
document.getElementById("wins").textContent=wins;
document.getElementById("guesses-left").textContent=remainingGuesses;
}