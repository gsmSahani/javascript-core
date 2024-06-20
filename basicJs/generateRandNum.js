// write a javascript program to generate the random number

// Example 1: Generate a Random Number Between 0 and 1
let randomNumber = Math.random();
console.log(randomNumber);

// Example 2: Generate a Random Integer Between 0 and a Given Maximum
// function getRandomNum(max) {
//   return Math.floor(Math.random() * max);
// }

// let maximum = 10;
// let randomDigit = getRandomNum(max);
// console.log(randomDigit);

// Example 3: Generate a Random Integer Between Two Given Values
function randomNumRange(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let min = 5;
let max = 10;
let randIntNum = randomNumRange(min, max);
console.log(randIntNum);
