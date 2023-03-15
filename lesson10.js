/*
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (num, i) {
    console.log(i, num);
})

nums.forEach(function (n){
    console.log(n*2);
 })

function printTriple(number) {
    console.log(number * 3);
}
nums.forEach(printTriple);
*/
//Example 2
// const books = [
// {
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25
// },
//     {
//     title:'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42
// },
//     {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11
//     },
//     {
//         title: 'A Gentleman in Moscow',
//         authors: ['Amor Towles'],
//         rating: 4.36
//     }]

// const goodBooks = books.filter(b => b.rating > 4.3)
//     const authorNeil = books.filter( book => book.authors.includes('Neil Gaiman'))

// const titles = books.map(function (b) {
//     return b.title;
//     })
// books.forEach(function (book) {
//     console.log(book.title.toUpperCase());
// })
//     //same output
// for (let book of books) {
//     console.log(book.title.toUpperCase());
// }

//MAP IS USED ON AN ARRAY, AND GENERATE A NEW ARRAY FOR A SPECIFIC FUNCTION
//  const numbers = [20, 21, 22, 23, 24, 25, 26];
// const words = ['asd', 'zxc', 'qwe', 'rty'];

//  const doubles = numbers.map(function (num) {
//      return num * 2;
//  })

// Example 2 for MAP
// Checking if a number is odd or even

// const numDetail = numbers.map(function (n) {
//     return {
//         value: n,
//         isEven: n % 2 === 0
//     }
// })

// Example 3 for MAP

// const abbrevs = words.map(function (word){
//    return word.toUpperCase().split('').join('.')
// })


//ARROW FUNCTIONS

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

// ARROW FUNCTIONS IMPLICIT RETURN
// const square = x => {
//         return x * x;
// }
// const squareN = n => n * n;

// const isPositive = n => {
//     if (n < 0) {
//         return false;
//     } else true;
// }

//EXAMPLE 2
// const num = [20, 21, 22, 23, 24, 25, 26];

// const doubles1 = num.map(function (n) {
//     return n * 2;
// })

// const doubles2 = num.map(n => n * 2);

// Example 3
// const num = [20, 21, 22, 23, 24, 25, 26];
// const parityList = num.map(function (n) {
//     if (n % 2 === 0) return 'even';
//     return 'odd';
// })

// const parityList2 = num.map((n) => {
//     if (n % 2 === 0) return 'even';
//     return 'odd';
// })

// const parityList3 = num.map((n) =>
//     n % 2 === 0 ? 'even' : 'odd'
// )