// Filter Strings with Length Greater Than 3
// Question: Write a function that filters out strings that have a length greater than 3.

// const originalStringArr = ['grapes','kiwi','guava','apple','banana','avacado','litchi'];
// const greateLength = originalStringArr.filter(str => str.length > 4);
// console.log(originalStringArr);
// console.log(greateLength);

// using for loop with functions
const originalStringArr = [
  "grapes",
  "kiwi",
  "guava",
  "apple",
  "banana",
  "avocado",
  "litchi",
];
const lengthThreshold = 6;
function filterStringsByLength(arr, lengthThreshold) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > lengthThreshold) {
      result.push(arr[i]);
    }
  }
  return result;
}

const greaterLength = filterStringsByLength(originalStringArr, lengthThreshold);

console.log("Original Array:", originalStringArr);
console.log("Filtered Array:", greaterLength);
