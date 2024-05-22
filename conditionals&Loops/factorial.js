// 6. Write a JavaScript program to calculate the factorial of a given number. 
// using iterative method
// function factorial(n){
//     if(n < 0){
//         return "Factorial is not defined as negative number";
//     }
//     let result = 1;
//     for(let i = 1; i <= n; i++){
//         result = result * i;
//     }
//     return result;
// }
// console.log(factorial(5));
// using while loop
function factorialWhileLoop(n){
    if(n < 0){
        return "Factorial is only defined with positive number";
    }
    let result = 1;
    let i  = 1;
    while(i <= n){
        result = result * i;
        i++;
    }
    return result;
}
console.log(factorialWhileLoop(5));