var Age = Number(prompt("What is your age?"));


if (Age < 0) {
    alert("ERROR");
}

if (Age ===21) {
    alert("Happy 21st Birthday!!");
}

if(Age % 2 !==0) {
    prompt("Your age is odd!")
}

if(Age % Math.sqrt(Age) === 0) {
    prompt("Your age is a perfect square!")
}
