// Convert array of objects to array of specific properties:
// Given an array of objects with name properties, extract only the name properties and return the new array
const person = [
    {name: "Shambhu", age: 47},
    {name: "Mira", age: 37},
    {name: "Gautam", age: 25},
    {name: "Priyanka", age: 22},
]
const names = person.map(person => person.name);
console.log(names);

// using the traditiona method
const people = [
    {name:"Pradeep",age:20},
    {name:"Rintu",age:27},
    {name:"Mohit",age:21},
    {name:"Martand",age:23},
]
const peopleData = [];
for(let i = 0; i<people.length; i++){
    peopleData.push(people[i].name);
}
console.log(peopleData);