// Problem 4: Currying with Array Filtering
// Question: Create a curried function that filters an array based on a predicate function.

// without curried version
const originalArray = [1, 2, 5, 3, 4, 10];
const filterArray = originalArray.filter((num) => num % 2 === 0);
console.log(filterArray);

// curried version
// const filterArray1  = predict => array => array.filter(predict);
// const isEven = num => num % 2 === 0;
// const filterEvenNumber = filterArray1(isEven);
// console.log(filterEvenNumber([1,2,3,4,5,6]));

const filterArray2 = (predict) => {
  return function (array) { 
    return array.filter(predict);
  };
};

function isEven(num){
     return num % 2 === 0;
}
const filterEvenNumber = filterArray2(isEven);
console.log(filterEvenNumber([1,2,3,4,5,6,7,8,9,10]));