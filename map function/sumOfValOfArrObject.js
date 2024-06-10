// Calculate the sum of values in an array of objects:
// Given an array of objects with value properties, calculate the sum of all value properties.

const person = [
    {value: 25},
    {value: 38},
    {value: 47},
    {value: 21},
];

const sumOfValue = person.reduce((accumulator,currentObject)=>{
    return accumulator + currentObject.value;
},0)
console.log(sumOfValue);