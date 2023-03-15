let rating = 7;

if (rating === 3) {
    console.log("You are a superstar!");
}
else if (rating === 2) {
    console.log("You are almost a superstar!");
}
else if (rating === 1) {
    console.log("you still have to work");
}
else {
    console.log("INVALID RATING!");
}



//Example 2


let highScore = 1430;
let userScore = 2200; 

if (userScore >= highScore) {
    console.log(`Congrats! The new Highscore is ${userScore} `);
}
else {
    console.log(`Good game! You didnt beat the highscore which is ${highScore}`);
}

//Example 3

let password = 'wtffff fffff';

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Password is valid')
    }
    else {
        console.log('Password cannot contain spaces')
    }
}
else {
    console.log('Password must be longer')
}

//Better nesting

let password2 = 'wtffff fffff';

if ((password2.length >= 6) && (password2.indexOf(' ') === -1)){
        console.log('Password is valid')
}
else{
    console.log('Password must be longer or without spaces')
}

//truthy

let loggedInUser = 'James';

if (loggedInUser) {
    console.log('You are logged in!')
}
else {
    console.log('Please log in!')
}