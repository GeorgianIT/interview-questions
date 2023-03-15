
/* Concat
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2); */

 /* EVERY
// const isBelowThreshold = (currentValue) => currentValue < 20;
// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.every(isBelowThreshold));
// Every is a true or false function that accept a parameter a condition and test every item from array with that condition */

/*     // ForEach, Filter, indexOf
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let max = 0;
let elem = '';
let index = 0;
words.forEach(element => {
    if (element.length > max)
    {
        max = element.length;
        elem = element;
        index = words.indexOf(element);
    }
});
console.log(max,elem, index);
const result = words.filter(word => word.length > 6);

console.log(result); */

/*  //String Trim/ Split/ lastIndexOf/ Slice
s = "   Hello World!  "
let lengthOfLastWord = function (s) {
    x = s.trim().split(" ")
    return x[x.length - 1].length

};

console.log(lengthOfLastWord(s), x);
//Split retrun An Array of strings, split at each point where the separator occurs in the given string. */

/* // unshift
digits = [4, 3, 9, 9];

const plusOne = function (arr) {
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i]<9){
            arr[i]++;
            return arr;
        }
        arr[i] = 0;
    }
    arr.unshift(1);
    return arr;
};

 console.log(plusOne(digits)) */

/* // Recursive string to one digit

let strg = '955555251'

let oneNumber = function (str) {
    let arr = [];
    let counter = 0;
    arr = str.split("")
    arr.forEach(element => {
        counter = counter + Number(element);
            
    });
    console.log(counter)
    str = counter.toString();
    return str;
}

let anotherFunction = function (str) {
    while (str.length > 1) {
        str= oneNumber(str)
    }
    return str;
}
anotherFunction(strg)
 */


head = [1,1,2,3,3,3,4,5,6,6,6,7]
var deleteDuplicates = function (head) {
    let cont = 0;
    let arr = [];
    head.forEach(element => {
        if (element > cont){
            cont++;
        arr.push(cont);}
    });
    return arr;
};

console.log(deleteDuplicates(head))