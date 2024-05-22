// write a js program to find the largest number in an array
// using 1st method math.max fn with spread operator

const array = [10,50,20,5,80,79,89];
const max = Math.max(...array);
console.log(max);

// 2nd method using for loop
// const array = [3,6,8,9,10,50,100];
// let max = array[0];

// for(let i = 1; i < array.length; i++){
//     if(array[i] > max){
//         max = array[i];
//     }
// }

// console.log(max);