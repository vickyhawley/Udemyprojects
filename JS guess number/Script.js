var secretNumber = 11;

var guess = prompt("Guess a number... any number...");



if(Number(guess) === secretNumber) {
    alert("YOU GUESSED IT!!");
}

else if(Number(guess) > secretNumber) {
    alert("Too high, mate!");
}

else {
    alert("Too looooww, silly!!");
}
