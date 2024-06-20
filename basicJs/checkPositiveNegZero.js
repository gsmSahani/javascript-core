// write a javascript program to check whether the given number is positive negative or zero

// function checkNumber(num){
//     if(num > 0){
//        return `${num} is positive`;
//     }else if(num < 0){
//         return `${num} is negative`;
//     }else{
//         return `${num} is zero`;
//     }
// }
// let number = -10;
// console.log(checkNumber(number));

// Approach 2 
// using ternary operator

function checkNumber (num){
    return num > 0 ? `${num} is positive`: num < 0 ? `${num} is negative` : `${num} is zero`;
}

let number = -10;
console.log(checkNumber(number));