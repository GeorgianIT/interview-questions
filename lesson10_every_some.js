// checkSpeed(465);

// function checkSpeed(speed) {
//     let contor = 0;
//     if (speed <= 74)
//         console.log('Nu-i problema man, nu duce tigaia');
//     else if (speed > 74)
//         for (i = 74; i <= speed; i++){
//             if (i % 5 == 0)
//             { contor++; }
//             if (contor > 12) {
//                 console.log("ai belit-o camatare");
//             }
//         }
//     console.log(contor + " Puncte ai amice")
// }


// const array = [512, 1, 2, 3, '', NaN , 5, 7, 2, false, 0 , null];

// function countTruthy(array) {
//     let contor = 0;
//     for (i = 0; i <= array.length; i++){
//     if (array[i])
//             contor++;
        
//     }
//     console.log(contor);
// }

// countTruthy(array);

// const shoppingCart =
// {
//     product: 'Jenga Classic',
//     price: 6.88,
//     quantity: 1
// };

// function showProperties(obj) {
//     for (let key in obj)
//         if (typeof obj[key] === 'string')
//             console.log(key, obj[key]);
// }

// showProperties(shoppingCart);

// sum(20);

// function sum(limit) {
//     let suma = 0;
//     for (i = 0; i <= limit; i++){
//         if ((i % 3 == 0) || (i % 5 == 0))
//             suma = suma + i;
//     }
//     console.log(suma);
// }


// const marks = [80, 90, 70];
// calculateGrade(marks);

// function calculateGrade(marks) {
//     let sum = 0;
//     let average = 0;
//     for (i = 0; i < marks.length; i++)
//         {
//         sum = sum + marks[i];
//         //console.log(sum);
//     }
//     average = sum / marks.length;
    

//     if ((average >= 1) && (average <= 59))
//         console.log("Grade is F");
    
        
//     else if ((average >= 60) && (average <=69))
//         console.log("Grade is D");

        
//     else if ((average >= 70) && (average <= 79))
//         console.log("Grade is C");

        
//     else if ((average >= 80) && (average <= 89))
//         console.log("Grade is B");

        
//     else if ((average >= 90) && (average <= 99))
//         console.log("Grade is A");
//     console.log(`sum is ${sum} and average is ${average}`);
// }


// showStars(10);

// function showStars(rows) {
//     let starString = '';
//     for (i = 1; i <= rows; i++){
//         starString = starString + '*';
//         console.log(starString);
//     }
// }

// showPrimes(20);

// function showPrimes(limit) {
//     for (i = 1; i <= limit; i++){
        
//         if ((i % 2 == 0) || (i % 3 == 0) || (i % 5 == 0) || (i % 7 == 0))
//             console.log("nu e prim da-l drq");
//         else
//             console.log(i + " asta e prim clar")
            
//     }
// }

// let array1 = [1, 2, 3, 9];
// let array2 = [1, 2, 4, 4];
// let array3 = [3, 3, 9, 6, 8, 2, 4, 4];

// checkSum(array3);


// function checkSum(arr) {
//     let sum = 20;
//     let probSum = 0;
//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr.length; j++) {
//             probSum = arr[i] + arr[j];
//             if (probSum == sum) {
//                 console.log(probSum);
//                 console.log("Ok!");
//                 break;
//             }
//             probSum = 0;
//         }
//     }
//     console.log('No!');
// }

// const game = [
//      {
//         username: 'Dan',
//         playingAs: 'X'
//     },
//     {
//         username: 'Nancy',
//         playingAs: 'O'
//     },
//     [
//         ['O', null, 'X'],
//         [null, 'X', 'O'],
//         ['X', 'O', null]
//     ]
// ];

// const player1 = game[1];
// console.log(player1);

// const mandingo = ['purple', 'blue', 'red'];
// const galbenele = ['mov', 'rosu', 'magenta'];

// function containPurple(arr) {
//     for (let color of arr) {
//         if (color === 'purple' || color === 'magenta') {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(containPurple(mandingo));


// const square = function (x) {
//     return x * x;
// }

// const squareWithArrows = (x) => {
//     return x * x;
// }

// const isEven = (num) => {
//     return num % 2 === 0;
// }
// console.log(squareWithArrows(4))


// const nums = [34, 42, 53, 62, 65, 71, 76, 94, 95];
// //create new array with filtered condition
// const odds = nums.filter(n => n % 2 === 1);
// const evens = nums.filter(n => n % 2 === 0);
// const bigNums = nums.filter(n => n > 50);

// console.log(odds);