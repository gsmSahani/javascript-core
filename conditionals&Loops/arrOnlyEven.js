// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
// function isArrayEven(number){
//     return number.filter(num => num % 2 === 0);
// }
// const number = [1,3,5,20,4,80,99,65,9];
// console.log(isArrayEven(number));

// using for loop
// function isArrayEven(array){
//     let result = [];
//     for(let i = 0; i<array.length; i++){
//         if(array[i] % 2 === 0){
//             result.push(array[i]);
//         }
//     } 
//     return result;
// }
// const array = [2,5,9,2,58,89,4,6,0,20];
// console.log(isArrayEven(array));

// using map() and filter() method
// function filterEvenNumber(array){
//     return array.map(num => num).filter(num => num % 2 === 0)
// }
// const array = [1,4,6,8,6,1,2,7,8];
// console.log(filterEvenNumber(array));