// write a javascript function that return the largest of 3 numbers

// function largestOfThree(a,b,c){
//     if(a >= b && a >=c){
//         return console.log(a);
//     } else if(b >= a && b >= c){
//         return console.log(b);
//     }else{
//         return c;
//     }
//     // return;
// }
// console.log(largestOfThree(10,20,30));

// using math.max
// function largestOfThree(a,b,c){
//     return Math.max(a,b,c);
// }
// console.log(largestOfThree(10,25,89));

// using reduce mthod
function largestOfThree(num1, num2, num3) {
  return [num1, num2, num3].reduce((max, current) =>
    current > max ? current : max
  );
}
console.log(largestOfThree(50,89,20));

