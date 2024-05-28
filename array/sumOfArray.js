//  a js program to get the sum of all the array elements

const array = [10,20,50,10];
function sumOfArray(arr){
    return arr.reduce((accumualator,currentValue) => accumualator + currentValue, 0);
}
console.log(sumOfArray(array));
