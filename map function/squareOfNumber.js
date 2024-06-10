// Calculate the square of each number in an array:
// Given an array of numbers, calculate the square of each number and return the new array.

const number = [1,2,3,4,5];
const squareNum = number.map((num) => num * num)
console.log(squareNum);

// traditional method 

const number2 = [2,4,6,8];
const squareNum2 = [];

for(let i = 0; i<number2.length; i++){
    const squared = number2[i] * number2[i];
    squareNum2.push(squared);
}
console.log(squareNum2)