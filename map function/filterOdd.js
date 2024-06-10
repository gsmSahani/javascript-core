// Filter out odd numbers from an array:
// Given an array of numbers, filter out the odd numbers and return the new array.

const originalNumber = [1,8,2,3,5,4,90,7,65,23];
const filterOdd = originalNumber.filter(num => num % 2 == 0);
console.log(filterOdd);

// traditional mehtod are
const originalNumber1 = [1,8,2,3,5,4,90,7,65,23];
const filterOdd1 = 0;

for(let i = 0; i<originalNumber1.length; i++){
    if(originalNumber1 % 2 == 0){
        filterOdd1.push(originalNumber1[i]);
    }
}
console.log(filterOdd);