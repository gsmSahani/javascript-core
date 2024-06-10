// Problem 3: Currying for Multiplication
// Question: Write a curried function that multiplies three numbers.

// by using arrow function
const multiply = a => b => c => a * b * c;
console.log(multiply(2)(3)(4));

// by simple way
const simpleMultiply = (a,b,c) =>{
    return a * b * c;
}
console.log(simpleMultiply(2,3,5));

// curried version
const curriedMultiplication = function(a){
    return function (b){
        return function (c){
            return a * b * c;
        }
    }
}
console.log(curriedMultiplication(3)(2)(3));
