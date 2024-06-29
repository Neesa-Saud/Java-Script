//day 3
let guessed = Math.round(Math.random());
 let userGuess = prompt("guess any number");
 if(userGuess ===guessed)
 {
    console.log("you matched the numbers" + guessed)
 }
 else{
    console.log("try again" +guessed);
 }
