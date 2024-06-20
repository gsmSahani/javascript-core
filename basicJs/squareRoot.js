// write a js program to find the square root 

function findSquareRoot(number){
    if(number < 0){
        return `Square root of the negative number is not real number`;
    }
    return Math.sqrt(number);
}
let number = 25;
let squareRoot  = findSquareRoot(number);
console.log(`The square root of ${number} is ${squareRoot}`);