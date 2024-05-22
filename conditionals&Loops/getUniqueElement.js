// Write a function that takes an array of integers as input and returns a new array with only the unique elements. 
function getUniqueEle(arr){
    return Array.from(new Set(arr))
}
const inputArray = [1,2,8,2,4,6,5,2,1,8,6,5,7,2,4];
console.log(getUniqueEle(inputArray));