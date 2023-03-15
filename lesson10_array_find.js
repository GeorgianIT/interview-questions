// let moveis = [
//     "The Fantastic Mr. Fox",
//     "Mr. and Mrs. Smith",
//     "Mrs. Doubtfire",
//     "Mr. Deeds"
// ]

// const findInMovie = moveis.find(movie => {
//     return movie.includes('Mrs');
// })

// const findInMovieStart = moveis.find(movie2 => (
//     movie2.indexOf("Mrs") === 0
// ))


// Filter array

// const nums = [34, 42, 53, 62, 65, 71, 76, 94, 95];
// //create new array with filtered condition
// const odds = nums.filter(n => n % 2 === 1);
// const evens = nums.filter(n => n % 2 === 0);
// const bigNums = nums.filter(n => n > 50);

let nums = [0,1,1,2,2,3,3,3,4,5]


const removeDuplicates = function (nums) {
    for (let i = 0; i <= nums.length; i++)
    {
        if (nums[i] === nums[i + 1]) {
            nums[i] = nums[i+1]
        }
    }
    return nums;
    
};

let k = removeDuplicates(nums);
console.log(k);
