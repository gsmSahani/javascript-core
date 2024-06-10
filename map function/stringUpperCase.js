// Convert array of strings to uppercase:
// Given an array of strings, convert each string to uppercase and return the new array.

// const string = ['gautam','sahani'];
// const upperCased = string.map((string)=> string.toUpperCase());
// console.log(upperCased);

// here we are taking the two string and storing it into the string variable
// and making modified string to be stored into the upperCased 
// here each and every element of string is called into the callback function and uppercase with the help of toUpperCase() method

// without using map method doing it by traditional method

const originalString = ['apple','banana','mango'];
const upperCaseString = [];

for(let i = 0; i< originalString.length; i++){
    const uppercase= originalString[i].toUpperCase();
    upperCaseString.push(uppercase);
}
console.log(upperCaseString);