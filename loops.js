/* FOR LOOP
the syntax
for (
    [initialExpression];
    [condition];
    [incrementExpression]
)


for (counter = 0; counter <= 3; counter++){
    console.log("Hello!");
}


for (i = 1; i < 5; i++){
    console.log(i*i);
}

for (let num = 1; num <= 20; num++){
    console.log(`${num}x${num}= ${num * num}`);
}

//for loops for arrays

const friends = [
    {
        name: 'Tudorel',
        favouriteGame: 'Rocket League'
    },
    {
        name: 'Bebitza',
        favouriteGame: 'Yu Gi Oh!'
    },
    {
        name: 'Vladut',
        favouriteGame: 'Dota 2'
    }
]

for (let i = 0; i < friends.length; i++){
    let friend = friends[i];
console.log(`${friend.name}'s favourite game is ${friend.favouriteGame}`)
    }


//Nested Loops

for (let i = 1; i <= 10; i++){
    console.log('Outer loop',i)
    for (let j = 1; j <= 3; j++){
        console.log('   Inner loop',j)
    }
}

//example for nested loops

const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++){
    let row = gameBoard[i];
    for (let j = 0; j < row.length; j++){
        totalScore += row[j]
    }
    console.log('total score is ',totalScore)
}


// While Loop

for (let i = 0; i <= 4; i++){
    console.log('Just print this');
}
*/
//random guess game
const target = Math.floor(Math.random() * 10)+1;
let guess = Math.floor(Math.random() * 10)+1; 
let numberOfTryes = 1;

while (guess !== target) {
    console.log(`Your ${numberOfTryes} guess was ${guess}, but was incorrect`);
    guess = Math.floor(Math.random() * 10);
    numberOfTryes++;
    if (numberOfTryes == 6) {
        console.log('You are out of tries!');
        break;
    }
}
if (guess == target){
console.log(`Your ${numberOfTryes} guess was ${guess}, and was right`);
console.log(`Congrats you have the right guess ${target} from ${numberOfTryes} tries`);
}



// FOR...OF syntax
/*
for(variable of interable){
    statement
}


let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
for (let i = 0; i < subreddits.length; i++){
    console.log(subreddits[i]);
}

for (let sub of subreddits) {
    console.log(sub);
}
*/

// FOR...IN syntax
/*
for(variable in object){
    statement
}

const fitBitData = {
    totalSteps      : 308707,
    totalCalories   : 2086,
    sleepTime       : 8.36,
    workoutsThisWeek: 5
}

for (let action in fitBitData) {
    console.log(action);
    console.log(fitBitData[action]);
}
*/