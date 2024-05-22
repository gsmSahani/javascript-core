// Write a function that determines if a given number is prime or not.
function isPrime(number){
    if(number <= 1){
        return false;
    }
    for(let i = 2; i<=Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(5));