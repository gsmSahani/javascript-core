// Write a function that sorts an array of numbers in ascending order. 
function sortAscending(arr){
    return arr.sort((a,b) => a-b);
}
console.log(sortAscending([1,8,2,4,9,2,70]));