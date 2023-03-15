//syntax
/*
function funcName() {
    //do something
}


function square(a) {
    console.log(`The square of ${a}  is ${a * a}`);
}

console.log(square(25));
*/
//roll die game
/*
function rollDie() {
    let roll = (Math.floor(Math.random() * 6) + 1);
    console.log(`Rolled ${roll}`);
}

function throwDice(throws) {
    for (let i = 0; i < throws; i++)
    rollDie();
}

function containPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true;
        }
    }
    return false;
}


function isValidPassword(username, password) {
    if ((password.length > 8) || (password === username) || (password.indexOf(' ') >0))
    {
        return false;
    }
    return true;
}


isValidPassword('dogLuvr123!', 'dogLuvr');


function average(arr) {
    let sum = 0;
    for (let num of arr) {
    sum += num;
    }
    let avg = sum / arr.length;
    return avg;
       
}




function getCard() {
value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
suit = ['clubs', 'spades', 'hearts', 'diamonds'];
    card = {
        valoare: value[Math.floor(Math.random() * 13) ] ,
        tip: suit[Math.floor(Math.random() * 4)]
    }
    console.log(card);
}

*/