// Combine two arrays into one array of objects:
// Given two arrays of equal length, combine them into an array of objects where each object contains elements from both arrays.
const names = ['gautam','pradeep','shambhu','rintu','anjali'];
const age = [25,22,47,27,23];

const combinedArrObj = names.map((names,index) => {
    return {name:names, age: age[index]};
});
console.log(combinedArrObj);

// using trditional method for loop

const namePerson = ['Barsa','Sumit','Binod','Kaushaliya'];
const agePerson = [21,18,38,35];

const combined = [];

for(let i = 0; i < namePerson.length; i++){
    combined.push({names:namePerson[i],age:agePerson[i]});
}
console.log(combined);