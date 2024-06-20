// write a js program to check prime number
// prime number is a natural number which can be divisible by 1 and itself
// example like 2,3,5,7,11,13

function checkPrime(num){
    if(num <= 1) return false;
    for(let i = 2; i<num; i++){
        if(num % i === 0) return false;
    }
    return true;
}

console.log(checkPrime(4));