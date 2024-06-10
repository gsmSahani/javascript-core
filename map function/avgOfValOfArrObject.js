// Calculate the average of values in an array of objects:
// Given an array of objects with value properties, calculate the average of all value properties.

const arrayOfObject = [
    {value: 10},
    {value: 20},
    {value: 21},
    {value: 36},
    {value: 5},
];
// calculating the sum of value of the properties
const sum = arrayOfObject.reduce((accumulator,currentObject)=>{
    return accumulator + currentObject.value;
},0);

const average = sum / arrayOfObject.length;
console.log(sum);
console.log(average);

