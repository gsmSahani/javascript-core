// write a js program to swap two numbers

// swapping using temp variable

// function swappinUsingTemp(a, b) {
//   console.log(`Value of a an b before swap: a = ${a} and b = ${b}`);
//   let temp = a;
//The  value of a is assigned to the temp
//now temp  is storing 10
//and  a is empty now
//   a = b;
//the value of b is assingned to a,
//now a is 20
// b is empty
//   temp = b;
//
//   console.log(`The value of a and b after swapping: a = ${a} and b = ${b}`);
// }
// let a = 10;
// let b = 20;
// swappinUsingTemp(a, b);

// swappin using arithemetic operations

function swapUsingArithmeticOper(a, b) {
  console.log(`Before swapping the number a = ${a} and b = ${b}`);
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(`After swapping the number a = ${a} and b = ${b}`);
}
let num1 = 10;
let num2 = 20;
swapUsingArithmeticOper(num1,num2);


// now using destructuring method
function swapDestructuringMeth(a,b){
    console.log(`Before swapping the number a = ${a} and b = ${b}`);
    [a,b] = [b,a];
    console.log(`After swapping the number a = ${a} and b = ${b}`);
}
let a = 90;
let b = 60;
swapDestructuringMeth(a,b);