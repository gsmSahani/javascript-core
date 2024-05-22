// 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
function fibonacciSeries(n){
    let fibbo = [0,1];
    for (let i = 2; i < n; i++){
        fibbo[i] = fibbo[i - 1] + fibbo[i - 2];
    }
    return fibbo.slice(0,n);
}
console.log(fibonacciSeries(10));