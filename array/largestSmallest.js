// write a js function to find the largest and smallest number from the array
// const array = [ 1,2,3,4,5,6,7,8,9,10];
// function largesetSmallest(arr){
//     return arr.reduce((acc,num) =>{
//         if(num > acc.max) acc.max = num;
//         if(num < acc.min) acc.min = num;
//         return acc;
//     }, {max: -Infinity, min: Infinity});
// }
// const result = largesetSmallest(array);
// console.log(`Largest: ${result.max}, Smallest: ${result.min}`);


// ------------------------2nd method using math.max and math.min --------------------
const array = [ 1,2,3,4,5,6,7,8,9,10];
function largesetSmallest(arr){
    const max = Math.max(...array);
    const min = Math.min(...array);
    return {max,min};
}
const result = largesetSmallest(array);
console.log(`Largest: ${result.max}, Smallest: ${result.min}`);