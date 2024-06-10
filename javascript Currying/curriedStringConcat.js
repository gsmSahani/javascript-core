// Problem 2: Curried Function for String Concatenation
// Question: Create a curried function that concatenates three strings.



// simplifying the above loc

// using arrow functions 
const concat = a => b => c => a + b + c;

console.log(concat('Gautam')(' ')('Sahani'));


// using normal function
const concatString = function(a){
    return function (b){
        return function (c){
            return a + b + c;
        };
    };
};
console.log(concatString("Mira")(' ')("Shambhu"));


// note: 
// Summary
// Curried Version: Each function call returns another function until all arguments are provided.
// Non-curried Version: All arguments are provided at once.

