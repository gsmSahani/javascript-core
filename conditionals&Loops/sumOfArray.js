//  Implement a function to find the sum of all the numbers in an array.
// function sumOfArray(arr){;
//     return arr.reduce((sum,num) => sum + num, 0);
// }
// console.log(sumOfArray([2,5,3]));

// using for loop
// function sumOfArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumOfArray([1, 5, 3,5,8]));



// using for of loop
// function sumOfArray(arr){
//     let sum = 0;
//     for(let num of arr){
//         sum += num;
//     }
//     return sum;
// }
// console.log(sumOfArray([1,2,3,5]));


// using for each loop
function sumOfArray(arr){
    let sum = 0;
    arr.forEach(num => sum +=num);
    return sum;
}

console.log(sumOfArray([1,2,3,4,5]));