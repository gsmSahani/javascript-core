// Filter Even Numbers
// Question: Write a function that filters out even numbers from an array.

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredEvenNum = originalArray.filter((item) => item % 2 === 0);
console.log(filteredEvenNum);

// traditional method

function filterEvenNumber(arr) {
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }
  return even;
}
console.log(
  filterEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
);
