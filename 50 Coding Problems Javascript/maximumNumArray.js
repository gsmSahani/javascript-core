// write a js program to find the maximum number in an array

// using Math.max method with spread operator

// function findMaxArray(arr) {
//   if (arr.length === 0) {
//     return undefined;
//   }
//   return Math.max(...arr);
// }
// const numberArr = [1, 8, 2, 4, 6, 20, 80, 1, 4, 9, 0, 3];
// console.log(findMaxArray(numberArr));

// Approach 2: using traditional approach for loop

// function findMaxArray(arr) {
//   if (arr.length === 0) {
//     return undefined;
//   }
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// const numbers = [1, 5, 89, 30, 4, 3, 5, 8];
// console.log(findMaxArray(numbers));

// Approach 3: Using reduce method
function findMaxArray(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}

const numbers = [1, 5, 89, 30, 4, 3, 5, 8];
console.log(findMaxArray(numbers));
